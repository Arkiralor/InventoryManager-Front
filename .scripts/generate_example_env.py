#!/usr/bin/env python3
"""
Script to generate an example.env file from the .env file.
This script reads the .env file and creates an example.env with
informative descriptions and placeholder values.
"""

from dataclasses import dataclass
from enum import Enum
from pathlib import Path


class Section(Enum):
    """Enum representing different sections in the environment file."""

    APPLICATION = "## Application Configuration"
    COMPANY = "## Company Contact Information"
    GENERAL = "## General"


class EnvVariable(Enum):
    """Enum representing environment variables with their metadata."""

    MODE = "MODE"
    DEBUG = "DEBUG"
    COMPANY_NAME = "COMPANY_NAME"
    COMPANY_ADDRESS = "COMPANY_ADDRESS"
    COMPANY_EMAIL = "COMPANY_EMAIL"
    COMPANY_PHONE = "COMPANY_PHONE"


@dataclass
class VariableConfig:
    """Configuration for an environment variable."""

    name: str
    description: str
    example_value: str
    section: Section


class VariableRegistry:
    """Registry for managing environment variable configurations."""

    def __init__(self):
        self._configs: dict[EnvVariable, VariableConfig] = {
            EnvVariable.MODE: VariableConfig(
                name=EnvVariable.MODE.value,
                description="Application mode: production, development, or QA",
                example_value='"development"',
                section=Section.APPLICATION,
            ),
            EnvVariable.DEBUG: VariableConfig(
                name=EnvVariable.DEBUG.value,
                description="Enable/disable debug mode (true or false)",
                example_value='"true"',
                section=Section.APPLICATION,
            ),
            EnvVariable.COMPANY_NAME: VariableConfig(
                name=EnvVariable.COMPANY_NAME.value,
                description="The name of your company or organization",
                example_value='"Your Company Name"',
                section=Section.COMPANY,
            ),
            EnvVariable.COMPANY_ADDRESS: VariableConfig(
                name=EnvVariable.COMPANY_ADDRESS.value,
                description="The physical address of your company",
                example_value='"123 Main Street, City, State/Province, Country - Postal Code"',
                section=Section.COMPANY,
            ),
            EnvVariable.COMPANY_EMAIL: VariableConfig(
                name=EnvVariable.COMPANY_EMAIL.value,
                description="Contact email address for your company",
                example_value='"contact@yourcompany.com"',
                section=Section.COMPANY,
            ),
            EnvVariable.COMPANY_PHONE: VariableConfig(
                name=EnvVariable.COMPANY_PHONE.value,
                description="Contact phone number for your company (including country code)",
                example_value='"+1 234 567 8900"',
                section=Section.COMPANY,
            ),
        }

    def get_config(self, var_name: str) -> VariableConfig | None:
        """Get configuration for a variable by name."""
        for env_var, config in self._configs.items():
            if config.name == var_name:
                return config
        return None

    def get_all_configs(self) -> dict[EnvVariable, VariableConfig]:
        """Get all variable configurations."""
        return self._configs


class EnvFileReader:
    """Reads and parses the .env file."""

    def __init__(self, env_file_path: Path):
        self.env_file_path = env_file_path

    def read_lines(self) -> list[str]:
        """Read all lines from the .env file."""
        if not self.env_file_path.exists():
            raise FileNotFoundError(f"Error: {self.env_file_path} not found!")

        with open(self.env_file_path, "r") as f:
            return f.readlines()

    def parse_sections(self, lines: list[str]) -> tuple[list[str], dict[str, list[str]], set[str]]:
        """Parse sections and variables from .env lines."""
        sections_order = []
        section_variables: dict[str, list[str]] = {}
        processed_vars: set[str] = set()
        current_section = None

        for line in lines:
            line = line.rstrip()

            if self._is_section_header(line):
                current_section = line
                self._add_section(current_section, sections_order, section_variables)
                continue

            if self._should_skip_line(line):
                continue

            if var_name := self._extract_variable_name(line):
                processed_vars.add(var_name)
                section = current_section if current_section else Section.GENERAL.value
                self._add_variable_to_section(section, var_name, sections_order, section_variables)

        return sections_order, section_variables, processed_vars

    @staticmethod
    def _is_section_header(line: str) -> bool:
        """Check if line is a section header."""
        return line.startswith("##")

    @staticmethod
    def _should_skip_line(line: str) -> bool:
        """Check if line should be skipped."""
        return not line or line.startswith("#")

    @staticmethod
    def _extract_variable_name(line: str) -> str | None:
        """Extract variable name from line."""
        if "=" in line:
            return line.split("=")[0].strip()
        return None

    @staticmethod
    def _add_section(section: str, sections_order: list[str], section_variables: dict[str, list[str]]) -> None:
        """Add a new section to tracking structures."""
        if section not in sections_order:
            sections_order.append(section)
            section_variables[section] = []

    @staticmethod
    def _add_variable_to_section(
        section: str, var_name: str, sections_order: list[str], section_variables: dict[str, list[str]]
    ) -> None:
        """Add a variable to its section."""
        if section not in section_variables:
            sections_order.append(section)
            section_variables[section] = []
        section_variables[section].append(var_name)


class ExampleEnvGenerator:
    """Generates the example.env file content."""

    HEADER_LINES = [
        "# Example Environment Configuration File\n",
        "# Copy this file to .env and fill in your actual values\n",
        "# DO NOT commit .env to version control!\n\n",
    ]

    def __init__(self, registry: VariableRegistry):
        self.registry = registry

    def add_missing_variables(
        self, sections_order: list[str], section_variables: dict[str, list[str]], processed_vars: set[str]
    ) -> None:
        """Add variables from registry that aren't in the .env file."""
        for config in self.registry.get_all_configs().values():
            if config.name not in processed_vars:
                section = config.section.value
                if section not in section_variables:
                    sections_order.append(section)
                    section_variables[section] = []
                section_variables[section].append(config.name)

    def generate_content(self, sections_order: list[str], section_variables: dict[str, list[str]]) -> list[str]:
        """Generate the complete example.env content."""
        content = list(self.HEADER_LINES)

        for section in sections_order:
            content.append(f"{section}\n")
            content.extend(self._generate_section_content(section_variables[section]))

        return content

    def _generate_section_content(self, variables: list[str]) -> list[str]:
        """Generate content for a single section."""
        section_content = []

        for var_name in variables:
            config = self.registry.get_config(var_name)

            if config:
                section_content.append(f"# {config.description}\n")
                section_content.append(f"{config.name}={config.example_value}\n")
            else:
                section_content.append(f'{var_name}="your_value_here"\n')

            section_content.append("\n")

        return section_content


class ExampleEnvWriter:
    """Writes the example.env file to disk."""

    def __init__(self, output_path: Path):
        self.output_path = output_path

    def write(self, content: list[str]) -> None:
        """Write content to the example.env file."""
        with open(self.output_path, "w") as f:
            f.writelines(content)

    def print_success_message(self) -> None:
        """Print success message after writing."""
        print(f"✓ Successfully generated {self.output_path}")
        print("This file can be safely committed to version control.")


class ExampleEnvOrchestrator:
    """Orchestrates the entire example.env generation process."""

    def __init__(self, base_dir: Path):
        self.base_dir = base_dir
        self.env_file = base_dir / ".env"
        self.example_env_file = base_dir / "example.env"

        self.registry = VariableRegistry()
        self.reader = EnvFileReader(self.env_file)
        self.generator = ExampleEnvGenerator(self.registry)
        self.writer = ExampleEnvWriter(self.example_env_file)

    def generate(self) -> None:
        """Execute the complete generation process."""
        try:
            # Read and parse .env file
            lines = self.reader.read_lines()
            sections_order, section_variables, processed_vars = self.reader.parse_sections(lines)

            # Add missing variables from registry
            self.generator.add_missing_variables(sections_order, section_variables, processed_vars)

            # Generate content
            content = self.generator.generate_content(sections_order, section_variables)

            # Write to file
            self.writer.write(content)
            self.writer.print_success_message()

        except FileNotFoundError as e:
            print(e)


def main() -> None:
    """Main entry point for the script."""
    base_dir = Path(__file__).parent.parent
    orchestrator = ExampleEnvOrchestrator(base_dir)
    orchestrator.generate()


if __name__ == "__main__":
    main()
