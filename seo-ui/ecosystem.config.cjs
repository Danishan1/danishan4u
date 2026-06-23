module.exports = {
  apps: [
    {
      name: "ui-danishan4u",
      script: "pnpm",
      args: "start",
      env: {
        PORT: 3008,
        NODE_ENV: "production",
      },
    },
  ],
};
