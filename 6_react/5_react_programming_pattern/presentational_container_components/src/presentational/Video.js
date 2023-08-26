function Video({src}) {
  return (
    <div>
      <video src={src} controls autostart="true" autoPlay loop muted/>
    </div>
  );
};
export default Video;