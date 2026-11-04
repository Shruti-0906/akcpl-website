/**
 * Renders a structured-data document.
 *
 * The single place `dangerouslySetInnerHTML` is used, so the escaping has one
 * audit site. `<` is escaped because a string inside the JSON could otherwise
 * close the script element early and inject markup.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
