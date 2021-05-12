import Blog from "@components/Blog";
import H from "@components/H";
import Checkbox from "@components/Checkbox";
import Code from "@components/Code";

import { imageOptimizationIn2021 as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";
import { useState } from "react";
import ContentTable, { ContentTableEntry } from "@components/ContentTable";

export default function BlogAvifInCloudflare() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }

  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <ContentTable contentTable={contentTable} />
      <H contentTableCallback={contentTableCallback} level={2} text="TL;DR" />
      <Checkbox
        advantages={[
          "Serve images in next-gen formats: Use AVIF and WebP, with JPG as fallback",
          "Efficiently encode images with a balance between compression and quality",
          "Properly size images: Use a responsive layout, set an explicit width and height and create multiple image sizes",
          "Optimize image loading using content-visibility, lazy loading and async decoding",
          "Serve images with an efficient cache policy, use a CDN if necessary",
          "Mind SEO and screen readers, use alt attributes",
        ]}
        checked={true}
      />
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      <H
        level={5}
        text="
        Summary: Images are a huge part of the web. Performance is one of the biggest success
        factors for websites. Optimize your images to improve your user’s experience.
      "
      />
      When building a modern web experience, it is essential to measure, optimize and monitor the
      speed of your website. Performance plays a significant role in the success of any website, as
      powerful websites appeal to and engage users better than low-performing websites. Websites
      should focus on optimizing user-centric happiness metrics. Consider this: No one likes small
      but ugly images, but no one wants to wait. Welcome to the world of image compression. You
      might think optimizing your images is as easy as pulling a lever, but you have many tasks
      ahead of you. Fortunately, many of these tasks are easy to do and even automatable. Some of
      these techniques are more established, while others are somewhat new. In this article, I
      outline all the methods to optimize your images. They minimize the bandwidth used to load
      images and reduce the CPU usage for displaying images. In addition, I offer you all kinds of
      solutions to ensure perfect optimization, including SEO-related tasks. Suppose you have
      formatted your images for better performance and follow best practices. In that case, your
      page will become more popular with search engines, browsers and networks and will load faster
      for your readers. Especially with half of your visitors likely using a mobile device,
      delivering optimal image file formats and sizes is even more critical. Otherwise, your
      hard-earned traffic will decrease, and your Google rankings will also decline. Feel free to
      skip to the last chapter, which contains an action list and a fully coded example that you can
      copy to reproduce the results.
      <H contentTableCallback={contentTableCallback} level={3} text="Google Core Web Vitals" />
      To understand how and why we should optimize our images, we should understand Core Web Vitals.
      Several case studies confirm that increased page load time leads to frustrated users and an
      increased bounce rate. To address this problem, Google has introduced Core Web Vitals to
      create optimal page load time and user experience guidelines. Google approves these metrics so
      much that they will be an integral part of its ranking algorithm from July 2021. These
      guidelines are based on three performance metrics:
      <H level={4} text="Largest Contentful Paint (LCP)" />
      LCP is the period during which the most significant content element in the viewport is made
      visible as soon as the user requests the URL. It is an important, user-centric metric for
      measuring the perceived load speed. It marks the point in the timeline where the page's main
      content is likely to have been loaded. This is important because it tells the reader that the
      URL is actually loading and the page is helpful. Images are one of the most important types of
      elements that are considered for the LCP. LCP is primarily influenced by slow servers, load
      times of resources and client-side rendering. We will minimize LCP by reducing bytes, caching
      and lazy loading.
      <H level={4} text="First Input Delay (FID)" />
      FID is a crucial, user-centered measure of load responsiveness. It quantifies the experience
      users feel when trying to interact with non-responsive pages - it ensures that the site is
      usable. The first impression users have of how quickly your website is can be measured with
      First Contentful Paint FCP). But how fast your website can paint pixels on the screen is only
      part of the story. Equally important is how responsive your website reacts when users try to
      interact with these pixels! The FID metric helps measure your user's first impression of the
      interactivity and responsiveness of your website. FID measures the time from the first time a
      user interacts with a page, i.e., when they click a link or tap on a button, to the time when
      the browser is actually able to process event handlers in response to that interaction. This
      measurement is taken from whatever interactive element that the user clicks on first. This is
      important on pages where the user needs to do something because then the page becomes
      interactive. By using our techniques, we will reduce FID through reduced (main-thread) CPU
      usage.
      <H level={4} text="Cumulative Layout Shift (CLS)" />
      CLS is an important, user-centric metric for measuring visual stability because it helps
      quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the
      page is delightful. Have you ever been reading an article online when something suddenly
      changes on the page? Without warning, the text moves, and you've lost your place. Or even
      worse: you're about to tap a link or a button, but in the instant before your finger land the
      link moves, and you end up clicking something else! CLS measures the sum total of all
      individual layout shift scores for every unexpected layout shift that occurs during the entire
      lifespan of the page. This is important to us because for example having images without
      dimensions can cause elements shift while a user is trying to interact with it, leading to a
      bad user experience. With techniques in this article, we will keep CLS to zero.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="Summarization of image optimization benefits"
      />
      When you visit a website, the server calls up all the files that the website is supposed to
      load on your screen. Depending on how your website is structured, images could make up the
      bulk of data that needs to be loaded. The smaller the file sizes of the images, the faster a
      website loads. But you don't want to end up with a grainy or blurry-looking website,
      especially in times of high-resolution screens. It's crucial to know what type of image to
      use. Properly optimized images still have their visual quality intact - and when you run an
      e-commerce site, that's really important to win customers' trust. In fact, 92.6% of people say
      that visual input is the leading factor influencing their purchasing decision.
      <H level={4} text="Here is a look at the main advantages" />
      <Checkbox
        advantages={[
          "Faster Loading: It improves the loading speed of your site. If your site takes too long to load, your visitors might get tired of waiting and move on to something else.",
          "Better SEO: Page speed has been a ranking factor in Google's algorithm for some time, but it will be an even more significant part in the future. Your site will rank higher in search engine results.",
          "Less Size: Creating backups will be faster. Smaller image file sizes will consume less bandwidth and also take up less space on your server.",
          "Better User Experience: Page performance and visual input are the main factors in purchasing decisions. Optimizing images is a huge factor in increasing conversion.",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="1) Serve images in next-gen formats: Know when to use which file format"
      />
      <H
        level={5}
        text="
        Summary: Use AVIF, then WebP and JPG as a fallback. Try to automate this process for your
        own sake.
      "
      />
      The primary goal of formatting your images is to find the balance between the lowest file size
      and acceptable quality. The two primary things to consider are the file format and the type of
      compression you use. You need to experiment with some images to see what works best. When
      comparing images, remember to view them in the dimensions in which they will appear on your
      website. The goal is not to compare enlarged 1:1 previews of high-resolution files, but to
      compare images with realistic pixel dimensions. This chapter focuses on the file format, while
      the next chapter will focus on the type of compression.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="Other formats than JPG and PNG"
      />
      If you know the right file formats and how to handle different types of images in different
      file formats, you can know which file type to use to speed up the loading time of your website
      while maintaining good image quality. Most websites provide images in JPEG and PNG formats
      that have been around since the 1990s. JPG is the dominant image format on the web, but that
      doesn't mean it's the best. A new generation of image formats offers the ability to further
      reduce your image file sizes. Moving to these next-generation image formats reduces the size
      of image files and pages, resulting in faster loading times, especially on mobile devices.
      This is especially important for the page experience of your visitors. These formats are:
      <Checkbox advantages={["WebP", "AVIF", "JPEGXL"]} checked={true} />
      Although device and browser compatibility varies for each format, it is worth evaluating for
      the reduction in image file size and overall faster downloading of your website. WebP, for
      example, can be an excellent replacement for JPEG, PNG and even GIF images in many cases. It
      also supports lossless compression, lossy compression and animated images. In most cases, WebP
      images can reduce image file size by about 25-50%.
      <H contentTableCallback={contentTableCallback} level={3} text="Browser compatibility" />
      If your target audience falls into one of the unsupported browser / device categories, you
      should ship optimized fallback images in the original JPEG / PNG format so that your users do
      not see a broken or poorly designed page. There are several types of files you can use that
      you can see below. There are several others, such as JPEG XR, JPEG2000 and HEIC. However, they
      are quite old and have no support for their age.
      <Checkbox
        advantages={[
          "PNG - produces higher quality images, but also has a larger file size. Created as a lossless image format, although it can also be lossy",
          "JPEG - uses lossy and lossless optimization. You can adjust the quality level for a good balance between quality and file size",
          "GIF - uses only 256 colors, has been popular for small videos, but is becoming less popular due to the size",
          "SVG - is a vector image format for two-dimensional graphics with support for interactivity and animation",
          "WebP - is an image format developed by Google to create smaller or better looking images compared to the JPEG, PNG or GIF image formats",
          "AVIF - is a fairly new image file format specification for storing images or image sequences compressed with AV1 in the HEIF file format",
          "JPEGXL - is a royalty-free raster graphics file format designed to outperform existing raster formats and thus become their universal replacement",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="Explaining the best usecase for all formats"
      />
      <H level={4} text="Using GIF" />
      Most platforms that host short videos do not use GIFs because animated GIFs can be quite
      large. Twitter, for instance, converts animated GIFs to video file formats such as MP4 to
      significantly reduce the total file size. Even GIPHY, an online directory and search engine
      that provides users with access to short loop videos without audio, uses MP4 video files.
      Fortunately, this is one of the areas where you can achieve significant results with
      relatively little effort. By converting large GIFs to videos, you can reduce your bandwidth
      requirements. Animated GIFs have three main features that a video must replicate:
      <Checkbox
        advantages={["They play automatically", "They loop continuously", "They're silent"]}
        checked={true}
      />
      Luckily, you can recreate these behaviors using the video element.
      <Code language="html">{`<video autoplay loop muted playsinline></video>`}</Code>
      <H level={4} text="Using PNG" />
      The Portable Network Graphics PNGs format was best used when saving graphics with limited
      colors. Logos and icons are good examples of images that would use the .png file format.
      Simple graphics with few colors can be saved as .png files to create high-quality images with
      low file sizes that are perfect for use on a website. This format is higher-quality than JPG
      images, so it is usually used for graphical images with more complicated designs. PNG's main
      advantage was that it also provides transparent image backgrounds that can be overlaid on
      colored backgrounds. The compromise is that PNG images are larger than JPG images, so their
      use will have a much worse impact on loading time. However, since newer file formats support
      transparency and a good compression rate, you should never use PNG.
      <H level={4} text="Using JPG" />
      JPG has done an excellent job in keeping file sizes small over the last 20 years. It uses
      lossy compression, which allows dynamic compromise between quality and file size. It is by far
      the most widely used image format in the world, as it is supported by almost every digital
      device and software. Although there are several other file formats that already surpass JPG in
      every aspect, the fact that it is supported everywhere makes it a durable format. It can be
      assumed that JPG is dying out quite slowly and will be replaced by AVIF or JPEGXL in the
      future. Until then, it is best to use JPGs on your site for fallback support if your visitors
      "browsers do not support the latest image formats. Fortunately, Mozilla Research has developed
      mozjpeg for the file size of your images, a production-quality JPEG encoder that improves
      compression while maintaining compatibility with the vast majority of decoders used. Utilizing
      it will save around 15% of the high file size that jpg has in comparison to newer formats.
      <H level={4} text="Using SVG" />
      Vector images are images that do not use pixel data, but use mathematical code-based data to
      create an image. Vector files have historically been used for all printing forms because a
      vector image retains its quality regardless of size. A vector-format logo can be printed on a
      business card, and the same file can be used to print the logo on a billboard. The quality of
      the image will be perfect without data loss of any size. SVGs are often used for logos or
      backgrounds that do not use many different colors. SVG images are responsive across devices,
      meaning that symbols and graphs are displayed correctly regardless of how they are viewed.
      They are typically very small file sizes and help to increase loading speed. Use them for
      every image that has precise geometric shapes and doesn't rely too much on color.
      <H level={4} text="Using WebP" />
      WebP is a modern image format developed by Google to provide superior lossless and lossy
      compression for optimizing web images. At a comparable quality compared to JPG, WebP images
      are 25% smaller. In addition to better compression, the format also supports transparency and
      is therefore a good substitute for PNG. Browser support for WebP is almost universal at 95%.
      You will need to provide a PNG or JPEG image for other browser support. Instructions on how to
      do this can be found at the end of this chapter.
      <H level={4} text="Using AVIF" />
      AVIF is the newest image format that has taken hold in web browsers and is currently supported
      in Chrome, Opera and Firefox. Safari support is not yet available, but is being actively
      edited. As Apple is in the group behind the format, we can expect future support. AVIF is
      remarkable because it significantly exceeds JPEG in every aspect, especially the file size.
      <H level={4} text="Using JXL" />A modern image format optimized for web environments. JPEG XL
      generally has better compression than WebP, JPEG, PNG and GIF, and was designed to supersede
      them. JPEG XL competes with AVIF, which has similar compression quality but fewer features
      overall. Unfortunately, it is not yet supported by any browser and should therefore not be a
      concern for the time being.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="How to convert all these image formats correctly?"
      />
      Opt for JPG as a general fallback, followed by WebP, which is better and has broad support,
      followed by AVIF, which is the latest active file format with slightly less support. To
      implement this progressive improvement for AVIF, use the picture element. The actual img
      element is nested in the picture. Until recently, it was relatively difficult to actually
      encode AVIF images on the server side, but with the latest version of libraries like sharp it
      is now trivial.
      <Code language="html">{`<picture>
   <source srcset="image.avif" type="image/avif">
   <source srcset="image.webp" type="image/webp">
   <img src="image.jpg" alt="AVIF example with WebP and JPEG fallback">
</picture>`}</Code>
      <H level={4} text="There are more possibilities for support and conversion" />
      <Checkbox
        advantages={[
          "NodeJS: Use the sharp library",
          "AMP: Consider displaying all amp-img components in WebP formats while setting an appropriate fallback for other browsers.",
          "Drupal: Consider installing and configuring a module to use the WebP image formats on your website. Such modules automatically generate a WebP version of your uploaded images to optimize loading times.",
          "Joomla: Consider using a plugin or service that automatically converts your uploaded images to the optimal formats.",
          "Magento: Consider searching the Magento Marketplace for a variety of third-party extensions to use newer image formats.",
          "WordPress: Consider a plugin or service that automatically converts your uploaded images to the optimal formats. WebP Express, Shortpixel, Smush and Imagify",
          "Cloudflare: Activate the function in the Resize Image module",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="2) Efficiently encode images: Compression quality vs size"
      />
      <H
        level={5}
        text="
        Summary: Always compress images. Find a good compromise between the quality settings and
        compression of images. Use lossless compression for photography, lossy for everything else.
        Images shouldn’t look blurry or pixelated.
      "
      />
      When you look at your page requests, images are likely to account for the majority of your
      total page size compared to HTML, CSS, or JavaScript files. If these images are uncompressed,
      they waste bandwidth and increase page load times, as the browser has to spend more time
      downloading. Uncompressed images are likely to be served in very high quality, resulting in a
      large file size. The larger the image, the more time the browser spends downloading, further
      increasing the waiting time for your visitors to the page. If this is done for multiple images
      on your page, file sizes can increase significantly and result in a very slow page. Efficient
      image encoding reduces your image file and thus the page size and helps to speed up page
      loading.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="Lossy vs. lossless compression"
      />
      It is also important to understand that there are two types of compression, lossy and
      lossless. Images are optimized by reducing the amount of data contained in an image, called
      data compression. Lossy - this is a filter that eliminates some of the data, which degrades
      the image, so you have to be careful about how much you want to shrink the image. Normally,
      this works because our eyes can process an image correctly even without every single piece of
      pixel. File size can be reduced by a large amount. Lossless compression reduces the size of an
      image file without compromising image quality. No data is lost using this method. However, the
      file size cannot be improved as much as with lossy compression. Simply use a good image
      optimization tool to handle image compression for you, at the quality level you feel
      comfortable with. Rule of thumb: Lossless suits photography websites, use lossy for everything
      else.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="How to efficiently encode images?"
      />
      There are a few strategies to efficiently encode images, such as:
      <Checkbox
        advantages={[
          "Manually compressing with tools like npmavif.io or Imageoptim",
          "NodeJS: sharp librbary",
          "Drupal:  Consider using a module that automatically optimizes and reduces the size of images. Ensure you are using the Drupal's built-in Responsive Image Styles",
          "Joomla: Consider using an image optimization plugin that compresses your images while retaining quality.",
          "Magento: Consider using a third-party Magento extension that optimizes images.",
          "WordPress: Consider using a plugin that compresses your images while retaining quality and optimizing image delivery.",
          "Shopify: Consider using a plugin that compresses your images while retaining quality and optimizing image delivery.",
          "Image CDN: You can use a CDN to deliver images that are optimally compressed, adapted to the visitor's device and delivered from the nearest geographical location to your visitor. Try Cloudflare.",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="3) Properly size images: Choosing correct image dimensions"
      />
      One of the most worthwhile optimizations you can make in the interest of web performance is to
      provide images in the correct size. An all too common problem is that images are uploaded at
      full resolution or of enormous dimensions. In this case, the browser must resize these images
      to a fraction of their original size for display, wasting time and resources. Ideally, your
      site should never provide images larger than the version rendered on the user's screen. For
      optimum website performance, images should be as large as they are needed to fill their
      "containers," based on your page layout. Slide show images, for example, are usually wider;
      blog images are medium in size at a width equal to the page width minus the sidebar;
      thumbnails are smaller. For each image on the page, we compare the size of the rendered image
      with the size of the actual image. Anything larger will only result in wasted bytes and slow
      the page's loading time. The main strategy for providing correspondingly large images is
      called "responsive images." With responsive images, you generate multiple versions of each
      image and then specify which version to use in which scenario. Therefore, it is crucial to
      first determine the image dimensions to know how wide your content area is on your site. Take
      this site as an example. The content area of this site has an exact maximum of 720px, which is
      why the image sizes in my blog content exist in the following dimensions:
      <Checkbox
        advantages={[
          "1440px for retina devices",
          "720px as a default for desktop",
          "540px for other mobile devices, as an additional step",
          "360px for the most common mobile devices",
        ]}
        checked={true}
      />
      Yes, there are a lot of mobile devices with 412 / 414 pixels, but the additional conversion
      reduces the file size by less than a few kilobytes, which is fine because we don't want to
      flood our servers with billions of images. Of course, the above example only works for images
      within a fixed width container. If you want a full width image, consider creating your images
      with typical screen widths such as 2560px, 1920px or 1366px.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="How do we implement different sizes in our code?"
      />
      We use the attributes srcset and sizes as shown below. The w selector tells the browser which
      URL to use based on the physical pixels that would be used if the image was drawn to the
      user's device given the width calculated from the sizes attribute. Hereby, the browser always
      downloads the smallest possible image that provides the user with the best image quality. Or
      it selects a smaller image if the user has, for example, opted for some kind of data saving
      mode. Provide more source elements with srcsets for browsers that only support older image
      formats.
      <Code language="html">{`<picture>

<source type="image/avif"
srcset="/img/image-1440.avif 1440w, /img/image-720.avif 720w, /img/image-540.avif 540w, /img/image-360.avif 360w"
sizes="(max-width: 720px) 100vw, 720px">

<source type="image/webp"
srcset="/img/image-1440.webp 1440w, /img/image-720.webp 720w, /img/image-540.webp 540w, /img/image-360.webp 360w"
sizes="(max-width: 720px) 100vw, 720px">

<source type="image/jpeg"
srcset="/img/image-1440.jpg 1440w, /img/image-720.jpg 720w, /img/image-540.jpg 540w, /img/image-360.jpg 360w"
sizes="(max-width: 720px) 100vw, 720px">

<img loading="lazy" decoding="async" width="2880" height="1620" src="/img/image-1440.jpg" alt="example image">

</picture>`}</Code>
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="How do we automate the resize process?"
      />
      With so many lines of code, manually performing this task can be a difficult process for any
      image, so here are some automation options:
      <Checkbox
        advantages={[
          "NPMJS: Use tools like sharp, gulp-responsive or responsive-images-generator",
          "AMP: Use the amp-img component's support for srcset to specify which image assets to use based on the screen size",
          "Angular: Consider using the BreakpointObserver utility in the Component Dev Kit to manage image breakpoints",
          "Drupal: Use the built-in Responsive Image Styles feature (available in Drupal 8 and above)",
          "Gatsby: Use the gatsby-image plugin to generate multiple smaller images for smartphones and tablets and image placeholders for efficient lazy loading",
          "Joomla: Consider using a responsive images plugin",
          "WordPress: Upload images directly through the media library to ensure that the required image sizes are available",
          "Image CDNs like Cloudflare are another main strategy for serving appropriately sized images",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="4) How to optimize the image loading process"
      />
      <H
        level={5}
        text="
        Summary: Optimize the loading process by using an explicit width and height for aspect ratio
        as well as lazy-loading.
      "
      />
      <H contentTableCallback={contentTableCallback} level={3} text="a) Use a responsive layout" />
      This is a well-understood technique for using an image horizontally up to its maximum size
      while maintaining the aspect ratio. A new feature in 2020 is that web browsers reserve the
      correct vertical space for the image before it is loaded when the width and height attributes
      are provided for the img element.
      <Code language="html">{`<style>
  img {
    max-width: 100%;
    height: auto;
    width: 100% /* if you like to resize the image to the width of the container */
  }
</style>
<!-- Providing width and height is more important than ever. -->
<img height="853" width="1280" … />`}</Code>
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="b) Use explicit width and height on image elements"
      />
      Always include width and height size attributes to your images and video elements. This
      approach ensures that the browser can allocate the right amount of space in the document while
      loading the image. Image and / or video elements that are not explicitly declared with height
      and width attributes are usually re-dimensioned using CSS. In this case, the browser can only
      determine the dimensions and allocate space to them after downloading the "non-large images"
      and / or videos. You will find that when the browser retrieves these images, your page content
      is constantly pushed down or moved from its original position as the browser resizes the
      images and positions them on your page. Layout shifts can be frustrating for your visitors, as
      elements may shift, potentially causing your page to appear visually disruptive. In addition,
      the browser needs to do more work to recalculate the page layout, potentially affecting the
      performance of your page. Avoiding large layout shifts is essential to provide your visitors
      with a smooth and rational experience. More importantly, the width and height attributes are
      used to calculate the aspect ratio of the image before it is loaded. It provides this
      information right at the beginning of the layout calculation. As soon as an image has a
      certain width, for example width: 100%, the aspect ratio is used to calculate the height.
      <Code language="html">{`<img src="image.jpg" width="640" height="360" alt="Image">`}</Code>
      <H contentTableCallback={contentTableCallback} level={3} text="c) Defer offscreen images" />
      Deferring offscreen images or lazy loading is the practice of delaying the loading of images
      that are not in your visitors "viewport until they are needed. Generally, when the browser
      loads a page, it downloads all the requested images, even those that are not immediately
      visible to your visitors. Effectively, the browser spends time loading images that are not
      needed when you first load the page, which can affect your visitors" experience. Lazy-loading
      offscreen images is considered an industry best-practice, as it ensures that the browser only
      downloads the images that are actually needed to display them in the viewport. This helps to
      save the essential bandwidth, especially on mobile devices, resulting in a fast-perceived
      page. Key metrics such as Time to Interactive TTI and Speed Index SI can be improved by
      implementing a lazy-loading strategy. Browsers such as Chrome versions 76 and higher) and
      Firefox versions 75 and higher) support native lazy-loading for images embedded in your HTML.
      Adding loading="lazy" to the img instructs the browser not to fetch the image until it moves
      closer to the screen and is likely to actually be rendered.
      <Code language="html">{`<img src="image.jpg" loading="lazy">`}</Code>
      <Checkbox
        advantages={[
          "AMP: Automatically lazy-load images with amp-img. See the Images guide.",
          "Drupal: Install a Drupal module that can lazy load images. Such modules provide the ability to defer any offscreen images to improve performance.",
          "Joomla: Install a lazy-load Joomla plugin that provides the ability to defer any offscreen images",
          "Magento: Consider modifying your product and catalog templates to make use of the web platform's lazy loading feature.",
          "WordPress: Install a lazy-load WordPress plugin that provides the ability to defer any offscreen images",
        ]}
        checked={true}
      />
      <H contentTableCallback={contentTableCallback} level={3} text="d) Content-visibility" />
      The content-visibility property could be one of the most powerful new CSS properties to
      improve the performance of page loading. content-visibility allows the user agent to skip the
      rendering work of an element, including layout and painting, until it is needed. Since the
      rendering is skipped when much of your content is not on the screen, using the content
      visibility property makes the initial user load much faster. It also allows for faster
      interactions with the content on the screen. Pretty neat. The main advantage for us could be
      that the browser doesn't bother decoding the image unless it must, and saves the CPU.
      <Code language="html">{`<style>
  img {
    content-visibility: auto;
  }
</style>`}</Code>
      <H contentTableCallback={contentTableCallback} level={3} text="e) Asynchronous decoding" />
      Adding decoding="async" to the image gives the browser permission to decode the image off the
      main thread avoiding user impact of the CPU time used to decode the image.
      <Code language="html">{`<img src="image.jpg" decoding="async">`}</Code>
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="5) Improve your hosting behavior"
      />
      <H
        level={5}
        text="
        Summary: Configure a cache-control header with a high max-age so users don’t have to
        download images multiple times. Use an image CDN and disable hotlinking to optimize your
        ressources
      "
      />
      <H contentTableCallback={contentTableCallback} level={3} text="Caching" />
      Browser caching instructs the visitor’s browser to save certain files on the local system of
      the visitor instead of downloading them repeatedly. Thus, for example, a visitor must download
      the logo image of a website on the first visit. However, after each subsequent visit, such a
      visitor would download the logo file from the local cache of the website, provided that
      browser caching is enabled. Browser caching can be used for images and many other file types
      such as statistical resources and object data. You want your cache headers to look like this
      cache control: public, max-age = 31536000. max-age = 31536000 is the fallback to the cache for
      one year. public is important to allow your CDN to cache the image and deliver it from the
      edge. But only use that if it is appropriate from a privacy perspective.
      <H contentTableCallback={contentTableCallback} level={3} text="Use an image CDN" />
      Are you serving an international audience? Then you might think of a Content Delivery Network.
      A Content Delivery Network, or CDN, is a geographically diverse network of servers that helps
      speed up page loading times by reducing the distance between the visitor to the website and
      the server. Content Delivery Networks are powerful tools for site optimization. Cloudflare is
      an example of a CDN that balances traffic across multiple destinations by using 155 + global
      data centers (where servers are housed). You can use its most basic services for free.
      <Checkbox
        advantages={[
          "Inbuilt image optimization features",
          "Audience segmentation based on device viewport becomes easy",
          "Enabling fast global reach via cloud acceleration",
          "It saves many costs by eliminating the need to invest in separate server providers in different parts of the world",
          "Pulls down the load on the server to achieve reduced delivery cost",
          "Secure storage capacity",
          "Potential support for HTTP/3, WAF, and DDoS protection.",
        ]}
        checked={true}
      />
      <H contentTableCallback={contentTableCallback} level={3} text="Disable hotlinking" />
      Hotlinking means when an individual or company copies the URL of an image that belongs to
      another website and embeds it on their website, causing the image to appear as if it were
      their own content. Hotlinking is a neighbor of copyright infringement, but despite this fact,
      the practice is widespread. In many cases, hotlinking is unintentional, but can cost the
      original owner of the image some money. It can even affect the performance of the website if
      an outflow of the server's resources occurs.
      <Checkbox
        advantages={[
          "WordPress offers plugins to disable hotlinking",
          "Ask your host to disable hotlinking",
          "CPanel offers a hotlinking setting",
          "Most CDNs offer a feature to disable hotlinking",
        ]}
        checked={true}
      />
      <H contentTableCallback={contentTableCallback} level={2} text="6) SEO Image Optimization" />
      <H
        level={5}
        text="Summary: Use an explanatory file name as well as describing title and alt attributes."
      />
      SEO stands for Search Engine Optimization, and it refers to all the small improvements that
      can be made to a website to make it more readable to search engine crawlers - and therefore
      more likely to rank high on search engine results pages. SEO is so critical to a website's
      success because nearly 70% of all online experiences start with a search engine and over 90%
      of global traffic comes from Google Search, Google Images and Google Maps. The higher you can
      rank your pages in Google results, the more clicks you will get. Search engines like to see a
      page provide a high-quality user experience. Short loading times of websites, which reduce the
      bounce rate and increase the time on the page, are even a confirmed ranking signal from
      Google. But apart from speeding up loading times, image optimization for SEO also involves
      contextualizing images so that visitors and search engines can understand them more easily.
      SEO image optimization differs from the more comprehensive image optimization described above.
      So how can you use SEO image optimization for better performance? There are a number of ways
      to make your images more accessible to search engines, which we will explain below.
      <H
        contentTableCallback={contentTableCallback}
        level={3}
        text="1. Optimize image file names"
      />
      Storing images with any default filenames can be secondary - but this random string of letters
      and numbers can hurt you in the long run. Before uploading an image to your website, it is
      important to make sure the filename is relevant, because search engines not only search the
      text on your pages - they also search image filenames and other attributes.
      <H contentTableCallback={contentTableCallback} level={3} text="2. Optimize title" />
      Similar to filenames, picture titles are another attribute we are talking about. You have the
      option to add an image title after you upload it, and it can be similar or even the same as
      the filename - just keep it short and relevant to what the picture actually represents!
      <H contentTableCallback={contentTableCallback} level={3} text="3. Insert Alt-Text" />
      Alt text or alternative text is text that appears in the place of an image when the image is
      not loaded. Alt text is important not only for screen readers, but also for SEO, because it
      helps crawlers understand the image file and the content of a page to provide more accurate
      search results. If you use WordPress or a number of popular website builders, you will be able
      to enter the title and alt text of an image once you upload it. In basic HTML, you can simply
      use the alt attribute. Use your best judgement and only label images when the information is
      useful to visitors.
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Summarized action list and full code example"
      />
      <Checkbox
        advantages={[
          "Serve images in next-gen formats: Use AVIF and WebP, with JPG as fallback",
          "Efficiently encode images with the tool of your choice",
          "Properly size images: Use a responsive layout, set an explicit width and height and create multiple images sizes",
          "Optimize loading using content-visibility, lazy loading and async decoding",
          "Serve images with an efficient cache policy, use a CDN if necessary",
          "Mind SEO and screen readers, use alt attributes",
        ]}
        checked={true}
      />
      <Code language="html">{`<picture>

<source type="image/avif"
srcset="/img/image-1440.avif 1440w, /img/image-720.avif 720w, /img/image-540.avif 540w, /img/image-360.avif 360w"
sizes="(max-width: 720px) 100vw, 720px">

<source type="image/webp"
srcset="/img/image-1440.webp 1440w, /img/image-720.webp 720w, /img/image-540.webp 540w, /img/image-360.webp 360w"
sizes="(max-width: 720px) 100vw, 720px">

<source type="image/jpeg"
srcset="/img/image-1440.jpg 1440w, /img/image-720.jpg 720w, /img/image-540.jpg 540w, /img/image-360.jpg 360w"
sizes="(max-width: 720px) 100vw, 720px">

<img loading="lazy" decoding="async" width="2880" height="1620" src="/img/image-1440.jpg" alt="example image">

</picture>`}</Code>
      <H contentTableCallback={contentTableCallback} level={2} text="More Tips" />
      Thanks for reading the article! Have fun implementing all the features mentioned above. Here
      are some more general best practices when it comes down to how to optimize images for web:
      <Checkbox
        advantages={[
          "Use SVG whenver possible alongside PNG or JPG",
          "Use CSS effects as much as possible (the hero gradient background on top of this page is pure CSS!)",
          "Crop whitespace of images and recreate this effect using CSS",
          "Remove unnessecary image metadata",
          "Use web fonts instead of placing text within images",
          "Always use .ico file format for your Favicon",
          "Reduce the bit-depth (most tools do this automatically)",
          "Use lossy compression where possible",
          "Mind your time. Automate the process as much as possible",
          "Replace animated GIFs with video for faster page loads",
        ]}
        checked={true}
      />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="List of all Image optimization tools and plugins"
      />
      There are a lot of tools and programs out there, both premium and free, that you can use to
      optimize your images. Some give you the tools to perform your own optimizations and others do
      the work for you.
      <H level={4} text="Image editors" />
      <Checkbox advantages={["Adobe Photoshop", "Gimp", "Paint.NET"]} checked={true} />
      <H level={4} text="Online conversion" />
      <Checkbox
        advantages={[
          "avif.io (for avif conversion)",
          "Bulkresizephotos (for resizing)",
          "TinyPng (for jpg and png compression)",
        ]}
        checked={true}
      />
      <H level={4} text="Image CDNs" />
      <Checkbox
        advantages={["Cloudflare", "Kraken.io", "ImageKit", "ImageEngine"]}
        checked={true}
      />
      <H level={4} text="Command line tools" />
      <Checkbox
        advantages={["GIFsicle", "JPEGtran", "JPEG Mini", "OptiPNG", "pngquant"]}
        checked={true}
      />
      <H level={4} text="GUI desktop tools" />
      <Checkbox advantages={["FileOptimizer", "ImageOptim", "Trimage"]} checked={true} />
      <H level={4} text="Node.JS Libraries" />
      <Checkbox advantages={["sharp"]} checked={true} />
      <H level={4} text="Wordpress plugins" />
      <Checkbox
        advantages={[
          "Imagify Image Optimizer",
          "Shortpixel Image Optimizer",
          "Smush",
          "Optimole",
          "TinyPNG",
        ]}
        checked={true}
      />
      <H level={4} text="Shopify plugins" />
      <Checkbox advantages={["Crush.pics", "Minifier"]} checked={true} />
    </Blog>
  );
}