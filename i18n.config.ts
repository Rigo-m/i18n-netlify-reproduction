import en from "./locales/en.json";
import it from "./locales/it.json";

// You can use `defineI18nConfig` to get type inferences for options to pass to vue-i18n.
export default defineI18nConfig(() => {
  return {
    // locales: ["it", "en"],
    // strategy: "prefix",
    legacy: false,
    locale: "it",
    messages: {
      en,
      it,
    },
  };
});
