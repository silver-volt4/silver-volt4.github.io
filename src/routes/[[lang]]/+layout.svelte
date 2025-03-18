<script lang="ts">
  /* @ts-ignore */
  import SvgIcon from "@jamescoyle/svelte-icon/src/svg-icon.svelte";
  import { page } from "$app/state";

  import { mdiGithub } from "@mdi/js";
  import schoolGithub from "$lib/assets/icons/schoolGithub.svgpath?raw";
  import discord from "$lib/assets/icons/discord.svgpath?raw";

  import langCS from "$lib/i18n/cs/icon.svg";
  import langEN from "$lib/i18n/en/icon.svg";

  import t, { loadTranslations, locale } from "$lib/i18n";
  import { changeLangUrl, buildCurrentLangUrl } from "$lib/i18n/util.svelte";
</script>

<svelte:head>
  <link rel="icon" href="/profile-image.png" />
</svelte:head>

<main>
  <header>
    <div class="topmost ps">
      <a href={changeLangUrl("cs")}>
        Czech
        <img src={langCS} alt="🇨🇿" />
      </a>
      <a href={changeLangUrl()}>
        English
        <img src={langEN} alt="🇬🇧" />
      </a>
    </div>
    <a href={buildCurrentLangUrl("/")} class="backlink psm">
      <img class="pfp" src="/profile-image.png" alt="Avatar" />
      <div class="vbox">
        <h1>{$t("common.title")}</h1>
        <em>{$t("common.subtitle")}</em>
      </div>
    </a>
  </header>

  <div class="content ps">
    <slot />
  </div>

  <footer class="psm">
    <div class="ps end">
      <div class="signature">
        <hr />
        <b>silver_volt4</b>
        <hr />
      </div>
      <div class="links gridlet" style:--gr-width="400px">
        <div class="linklist">
          <b>
            {$t("common.links")}
          </b>
          <a href={buildCurrentLangUrl("/")}>
            {$t("common.page-about")}
          </a>
          <a href={buildCurrentLangUrl("/blog")}>
            {$t("common.page-blog")}
          </a>
        </div>
        <div class="linklist">
          <b>{$t("common.contact")}</b>
          <a href="https://github.com/silver-volt4" target="_blank">
            <span>{$t("common.contact-github")}</span>
          </a>
          <a href="https://github.com/sykdan" target="_blank">
            <span>{$t("common.contact-githubalt")}</span>
          </a>
          <a
            href="https://discord.com/users/276742341031755776"
            target="_blank"
          >
            <span>{$t("common.contact-discord")}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</main>

<style lang="scss">
  @use "$lib/style/constants.scss";
  @use "sass:color";

  $darkBack: color.adjust(constants.$dark, $lightness: 3%);

  div.topmost {
    height: 32px;
    margin-bottom: 0;
    padding: 0;
    display: flex;
    justify-content: end;
    align-items: center;

    a {
      color: constants.$light;
      text-decoration: none;
      margin-right: 16px;

      img {
        vertical-align: middle;
      }
    }
  }

  a.backlink {
    color: unset;
    text-decoration: unset;
    margin: 0;
    max-width: 1000px;
    padding: 32px 24px;
    padding-top: 0 !important;
    margin: 0 auto;
  }

  header a.backlink,
  footer {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    // position: absolute;
    // left: 0;
    // right: 0;

    .content {
      flex-grow: 1;
      margin-bottom: 0;
    }
  }

  header {
    justify-content: center;
    margin-bottom: 32px;
    padding-bottom: 0;
    background-color: $darkBack;
    position: sticky;
    top: 0;

    nav {
      display: flex;
      padding: 0;
      margin-top: 0;
      margin-bottom: 0;

      a {
        flex: 1;
        display: block;
        font-size: 1.25em;
        color: constants.$light;
        text-decoration: none;
        padding: 4px;
        text-align: center;

        transition: background-color 0.1s;

        &:hover,
        &.selected:hover {
          background-color: color.adjust(constants.$light, $alpha: -0.8);
        }

        &.selected {
          background-color: color.adjust(constants.$light, $alpha: -0.9);
          border-bottom: solid 1px constants.$light;
        }
      }
    }

    h1 {
      display: inline-block;
      font-size: 48px;
      margin: 0;
    }

    .pfp {
      height: 128px;
      border-radius: 100%;
    }
  }

  footer {
    .end {
      margin-top: 32px;
      margin-bottom: 32px;
    }

    .signature {
      display: flex;
      flex: 1;

      b {
        margin: 0 16px;
      }

      hr {
        height: 0;
        flex: 1;
      }
    }

    .links {
      margin-top: 16px;
      a {
        text-decoration: none;
      }

      .linklist {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    }
    background-color: $darkBack;
  }

  .vbox {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: constants.$mobileRes) {
    header {
      a.backlink {
        gap: 16px;
        padding: 32px 16px;
      }

      h1 {
        font-size: 32px;
      }

      img.pfp {
        height: 96px;
      }
    }
  }
</style>
