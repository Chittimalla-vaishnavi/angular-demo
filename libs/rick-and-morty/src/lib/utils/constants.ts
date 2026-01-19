export const CHART_OPTIONS = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        color: '#9d9b9b',
      },
    },
  },
};

export const lightNeutralColorForName = (name: string) =>
  `hsl(${[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 360}, 35%, 80%)`;
