const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");
  console.log("this is the room", room);

  const socketUrl = "server-production-5ccc.up.railway.app";
  // const socketUrl = 'https://boiling-eyrie-34493.herokuapp.com'
  const socketBuilder = new SocketBuilder({ socketUrl });

  const peerConfig = Object.values({
    id: undefined,
    config: {
      // host: "peer-production.up.railway.app",
      secure: false,
      //port: 7376,
      port: 9000,
      host: "localhost",
      path: "/",
    },
  });
  const peerBuilder = new PeerBuilder({ peerConfig });

  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room,
    socketBuilder,
    peerBuilder,
  };

  Business.initialize(deps);
};

window.onload = onload;
