import Blog from "@components/Blog";
import H from "@components/H";
import Image from "@components/Image";
import SmartLink from "@components/SmartLink";

import { useAvifInEdge as postdata } from "lib/meta";
import { useAvifInWindows as post1 } from "lib/meta";
import { useAvifInFirefox as post2 } from "lib/meta";
import { useAvifInGimp as post3 } from "lib/meta";

export default function BlogAvifInEdge() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <H level={2} text="Current status and future plans" />
      While Google can quickly implement new browser features, other companies such as Microsoft and
      Mozilla are much slower. AVIF was created as part of the development of AV1, which was
      developed by the Alliance for Open Media. Since all the major browser manufacturers are part
      of this alliance and everyone is interested in displacing a new and modern format, you expect
      Microsoft Edge to support AVIF files soon. At the time of writing, Edge does not yet support
      AVIF images; it refuses to render or otherwise open AVIF images.
      <Image url="edge-new" alt="the new microsoft edge" />
      If you want to enable experimental AV1 support, you can do so by downloading a plugin. At
      least YouTube videos will then be streamed in the new format.
      <H level={2} text="Your version of Edge" />
      If you are looking for a way to test the functionality and capabilities of AV1 on Microsoft
      Edge, you should{" "}
      <SmartLink
        link="https://www.microsoft.com/edge"
        text="download the latest version of the browser."
      />{" "}
      The new Microsoft Edge is based on Chromium and was first released in early 2020. It is
      compatible with all versions of Windows and macOS for whatever reason. Microsoft claims it is
      the only browser you will ever need, but well, who wouldn't say that about their own browser.
      You can quickly determine if you own a Chromium version of Edge by looking at the browser
      icon. The new version of Edge has a more minimalist and gradient style, while the old one
      looks like a Van Gogh.
      <Image url="edge-or-edge" alt="microsoft edge version difference" />
      <H level={2} text="AV1 Plugin" />
      The AV1 Extension add-on is available from the{" "}
      <SmartLink
        link="https://www.microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v"
        text="Microsoft Store"
      />
      .The AV1 Extension add-on is available from the Microsoft Store. It provides support for AV1
      videos on Windows 10 devices and Edge. It also allows viewing AVIF images, including
      thumbnails, and editing in Paint.
      <Image url="edge-av1" alt="av1 extension" />
      In addition, this extension enables video apps installed on Windows 10 to play videos encoded
      using the AV1 video encoding standard developed by the Alliance for Open Media. As already
      mentioned, there is no support for AVIF images yet, although avif.io converts images
      seamlessly in Edge. However, since Microsoft Edge uses the same Chromium engine, support for
      Edge should be introduced soon.
    </Blog>
  );
}
