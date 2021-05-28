export const environment = {
  production: true,
  shouldPromptTokenRequest: false,
  getBuilderPath(port: string): string {
    return port ? `:${port}` : '';
  },
};
