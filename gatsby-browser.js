import "./src/styles/global.css"

if (typeof window !== 'undefined') {
  import('resize-observer-polyfill').then((module) => {
    const ResizeObserver = module.default;
  });
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const onClientEntry = () => {
};
