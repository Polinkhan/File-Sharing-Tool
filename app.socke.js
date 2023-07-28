module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);

    socket.on("sendFile", (data) => {
      socket.emit("receiveFile", data);
    });

    socket.on("disconnect", () => {
      console.log("A client disconnected:", socket.id);
    });
  });
};
