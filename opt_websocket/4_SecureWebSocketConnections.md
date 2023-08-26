# Secure WebSocket Connections

You may notice that some websites use the `https://` protocol at the beginning of the URI while others use `http://`. So what’s the difference?

`https://` is the secure version of the `http://` protocol and is encrypting using the Transport Layer Security (TLS) protocol. Using an HTTPS server instead of a basic HTTP server safeguards your users from malicious attacks, such as a [`Man In The Middle Attack`](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#man-in-the-middle_mitm).

In the last exercise, we learned that during the WebSocket handshake a GET request is sent to the server using a `ws://` URI. Just like the `http://` protocol, `ws://` is an unencrypted protocol. So is there a more secure WebSocket protocol?

Yes! WebSocket connections can also use the TLS protocol to establish a more secure connection by using the `wss://` protocol (notice the extra s). Connections using the `wss://` protocol function just like `ws://` ones, except that the initial handshake takes place over HTTPS instead of HTTP.

![](./mdAssets/http%20vs%20ws%20connections.svg)
