
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export default function Translate({ path }: { path: string }) {
  const { t } = useTranslation();

  return (
    <Fragment>
      {t(path)
        .split("\n")
        .map((str, index) => (
          <Fragment key={index}>
            {str}
            <br />
          </Fragment>
        ))}
    </Fragment>
  );
}