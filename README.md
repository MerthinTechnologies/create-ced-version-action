# Create CED version

Github Action to create an empty version within a CloudEdgeDistribution project.

## Inputs

### `cli-token`

CloudEdgeDistribution CLI token. If not specified it'll try to resolve the CLI token from environment variable `CED_CLI_TOKEN`.

### `environment`

Environment to use in CloudEdgeDistribution. If not specified it'll try to resolve it from environment variable `CED_ENVIRONMENT`, it'll use the default environment in ced.json otherwise.

### `path`

Path to the CloudEdgeDistribution project. If not specified it'll try to resolve it from environment variable `CED_PROJECT_PATH`, it'll use current folder otherwise.

## Output

### `version`

Created version name

## Example usage

```yaml
- uses: MerthinTechnologies/create-ced-version-action@v1
  id: create-version
  with:
    path: ${{ env.PROJECT_FOLDER }}
    cli-token: ${{ secrets.CED_CLI_TOKEN }}
    environment: 'production'
- name: Get the output version
  run: echo "Version ${{ steps.create-version.outputs.version }} created"  
```
