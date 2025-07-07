<script lang="ts">
  /* @ts-ignore */
  import langCS from "$lib/i18n/cs/icon.svg";
  import langEN from "$lib/i18n/en/icon.svg";

  import t, { loadTranslations, locale } from "$lib/i18n";
  import { changeLangUrl, buildCurrentLangUrl } from "$lib/i18n/util.svelte";
</script>

<svelte:head>
  <link rel="icon" href="/profile-image.png" />
</svelte:head>

<header>
  <div class="languages">
    <div class="lang">
      <a href={changeLangUrl()}>
        <img src={langEN} alt="🇬🇧" title="Englush" />
      </a>
      <a href={changeLangUrl("cs")}>
        <img src={langCS} alt="🇨🇿" title="Czech" />
      </a>
    </div>
  </div>
  <a href={buildCurrentLangUrl("/")} class="backlink psm">
    <img class="pfp" src="/profile-image.png" alt="Avatar" />
    <div class="vbox">
      <h1>{$t("common.title")}</h1>
      <em>{$t("common.subtitle")}</em>
    </div>
  </a>
</header>

<main class="content ps">
  <slot />
</main>

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
        <a href="https://discord.com/users/276742341031755776" target="_blank">
          <span>{$t("common.contact-discord")}</span>
        </a>
        <a
          href="#"
          onclick={(e) => {
            e.preventDefault();
            let a = document.createElement("a");
            a.setAttribute(
              "href",
              // quirky protection against html scanning.
              // doesnt protect against genai (i tried :c)
              String.fromCharCode(
                ...[-12, 8, 3, 8, -5, -53].reduce(
                  (previous, current) => {
                    previous.push(previous[previous.length - 1] + current);
                    return previous;
                  },
                  [109],
                ),
              ) +
                "gdpancake5" +
                String.fromCharCode(
                  ...[39, 6, -12, 8, 3, -62, 53, 12, -2].reduce(
                    (previous, current) => {
                      previous.push(previous[previous.length - 1] + current);
                      return previous;
                    },
                    [64],
                  ),
                ),
            );
            a.click();
          }}
        >
          <span>{$t("common.contact-mail")}</span>
        </a>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @use "$lib/style/constants.scss";
  @use "sass:color";

  $darkBack: color.adjust(constants.$dark, $lightness: 3%);

  div.languages {
    z-index: 1;
    height: 32px;
    position: absolute;
    right: 8px;
    top: 8px;
    display: flex;
    justify-content: end;

    a img {
      vertical-align: middle;
      height: 32px;
    }
  }

  a.backlink {
    color: unset;
    text-decoration: unset;
    margin: 0;
    max-width: 1000px;
    padding: 32px 24px;
    margin: 0 auto;
  }

  header a.backlink,
  footer {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  header {
    justify-content: center;
    margin-bottom: 32px;
    padding-bottom: 0;
    background-color: $darkBack;
    position: sticky;
    top: 0;

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
