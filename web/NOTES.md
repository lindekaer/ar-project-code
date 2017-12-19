# Project

## Articles

(https://medium.com/arjs/why-web-apps-are-the-future-of-augmented-reality-c503e796a0c5)
(https://www.html5rocks.com/en/tutorials/webgl/jsartoolkit_webrtc/)

* Drawing project with gestures (https://marmelab.com/blog/2017/06/19/augmented-reality-html5.html)
* They have used a QR code as a marker
  (http://ieeexplore.ieee.org/document/6342109/)
  (https://www.researchgate.net/publication/261235397_An_Augmented_Reality_System_Using_Qr_Code_as_Marker_in_Android_Smartphone)

## Real world application questions

1. Why is AR interesting in a retail context?
2. Is a browser based implementation suitable for the use case?

## Technical questions

To get an idea of the impact of each individual component in providing the
AR experience to the user.

1. Average client bundle load time in a realistic 3G scenario (6000 ms)
2. Time spent initializing the library bootstrapping the AR experience
3. Time spent localizing the marker

* experiment with different thresholds
* experiment with different lighting conditions

4. Time spent rendering the 3D model
5. Total accumulated time serving the "AR experience" to the end user

The web libraries are large (~900kb) and therefore take a long time to load initially. Implementation of
browser based caching can eliminate the long load time on subsequent loads.

Wide support for browser based AR experiences has only just become a reality after the launch
of IOS 11 effectively introducing WebRTC to mobile devices by Apple. WebRTC is a family of protocols
that allows the user to access both microphone and camera directly from their browser. The support
for WebRTC gives the developer access to previously only native capabilities.

## Other opportunities

* Compile ARToolkit with WebAssembly (instead of asm.js)
