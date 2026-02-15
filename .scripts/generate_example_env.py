#!/usr/bin/env python3
"""
Script to generate an example.env file from the .env file.
This script reads the .env file and creates an example.env with 
informative descriptions and placeholder values.
"""

import os
from pathlib import Path


def generate_example_env():
    """Generate example.env file with descriptive comments."""
    
    # Define the base directory (parent of .scripts)
    base_dir = Path(__file__).parent.parent
    env_file = base_dir / ".env"
    example_env_file = base_dir / "example.env"
    
    # Check if .env exists
    if not env_file.exists():
        print(f"Error: {env_file} not found!")
        return
    
    # Define descriptions for each environment variable
    descriptions = {
        "MODE": "Application mode: production, development, or QA",
        "DEBUG": "Enable/disable debug mode (true or false)",
        "COMPANY_NAME": "The name of your company or organization",
        "COMPANY_ADDRESS": "The physical address of your company",
        "COMPANY_EMAIL": "Contact email address for your company",
        "COMPANY_PHONE": "Contact phone number for your company (including country code)",
    }
    
    # Define example values for each environment variable
    example_values = {
        "MODE": '"development"',
        "DEBUG": '"true"',
        "COMPANY_NAME": '"Your Company Name"',
        "COMPANY_ADDRESS": '"123 Main Street, City, State/Province, Country - Postal Code"',
        "COMPANY_EMAIL": '"contact@yourcompany.com"',
        "COMPANY_PHONE": '"+1 234 567 8900"',
    }
    
    # Read the .env file to get all variables
    with open(env_file, 'r') as f:
        env_lines = f.readlines()
    
    # Generate example.env content
    example_content = []
    example_content.append("# Example Environment Configuration File\n")
    example_content.append("# Copy this file to .env and fill in your actual values\n")
    example_content.append("# DO NOT commit .env to version control!\n\n")
    
    current_section = None
    
    for line in env_lines:
        line = line.rstrip()
        
        # Preserve section comments
        if line.startswith("##"):
            if example_content[-1] != "\n":
                example_content.append("\n")
            current_section = line
            example_content.append(f"{line}\n")
            continue
        
        # Skip empty lines and regular comments
        if not line or line.startswith("#"):
            continue
        
        # Parse variable name
        if "=" in line:
            var_name = line.split("=")[0].strip()
            
            # Add description if available
            if var_name in descriptions:
                example_content.append(f"# {descriptions[var_name]}\n")
            
            # Add example value
            if var_name in example_values:
                example_content.append(f"{var_name}={example_values[var_name]}\n")
            else:
                # If no example value defined, use a placeholder
                example_content.append(f"{var_name}=\"your_value_here\"\n")
            
            example_content.append("\n")
    
    # Write to example.env
    with open(example_env_file, 'w') as f:
        f.writelines(example_content)
    
    print(f"✓ Successfully generated {example_env_file}")
    print(f"  This file can be safely committed to version control.")


if __name__ == "__main__":
    generate_example_env()
