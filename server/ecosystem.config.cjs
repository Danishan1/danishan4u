module.exports = {
  apps: [
    {
      name: "ser-danishan4u",
      script: "pnpm",
      args: "dev",
      env: {
        PORT: 5008,
        NODE_ENV: "production",
      },
    },
  ],
};
