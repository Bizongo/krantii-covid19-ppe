let vw = window.innerWidth <= 480 ? 4.14 : 14.4; // Viewport width: 414px, 1400px

export const px2vw = (px) => {
  vw = window.innerWidth <= 480 ? 4.14 : 14.4;
  if (px) {
    const pxArray = px.split(' ');
    const vwArray = pxArray.map((px) =>
      isNaN(parseFloat(px)) ? 0 : `${Math.round((parseFloat(px) / vw) * 100000) / 100000}vw`
    );
    return vwArray.join(' ');
  }

  return 0;
};
