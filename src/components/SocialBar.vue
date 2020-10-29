<template>
  <ul>
    <li>
      <a href="https://www.facebook.com/ubbrugby">
        <img src="../assets/images/icon_fb.svg" alt="facebook link"
      /></a>
    </li>
    <li>
      <a href="https://www.instagram.com/ubbrugby/">
        <img src="../assets/images/icon_insta.svg" alt="instagram link"
      /></a>
    </li>
    <li>
      <a
        href="https://twitter.com/UBBrugby?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        ><img src="../assets/images/icon_twitter.svg" alt="twitter link"
      /></a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/union-bordeaux-b%C3%A8gles/"
        ><img src="../assets/images/icon_linkedin.svg" alt="linkedin link"
      /></a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UC0ofHgdtPGcNd21eVuBSWBQ"
        ><img src="../assets/images/icon_yt.svg" alt="youtube link"
      /></a>
    </li>
    <li>
      <a href="https://www.tiktok.com/@ubbrugby?lang=fr"
        ><img src="../assets/images/icon_tiktok.svg" alt="tiktok link"
      /></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialBar",
};
</script>

<style lang="scss">
ul {
  display: flex;
}
li {
  margin-right: 2% !important ;
}
img {
  width: 25px;
  height: 25px;
}
</style>
