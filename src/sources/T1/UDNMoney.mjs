export function UDNMoney($) {
  const data = $.extract({
    title: "h1#story_art_title",
    date: [
      {
        selector: "time.article-body__time",
        value: (el, key) => {
          const data = $(el).text().replace(/\//g, "-").slice(0, 10);
          return data;
        },
      },
    ],
    author: [
      {
        selector: "div.article-body__info > span",
        value: (el, key) => {
          const text = $(el).text();
          return text.replace(/.*記者(.{3}).*/, "$1");
        },
      },
    ],
    content: [
      {
        selector: "section.article-body__editor p",
        value: (el, key) => {
          // const sampleKey = this.findIndex(item  => item.includes("延伸閱讀"))
          if (!$(el).text().trim() == "") {
            const sample = $(el)
              .text()
              .replace(/\$\(.*/s, "")
              .trim();
          
              // if (key < sampleKey) {
                return sample;
              // }
            
          }
        },
      },
    ],
  });
  data["source"] = "經濟日報";
  return data;
}

//minor unresolved additional headlines
