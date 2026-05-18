import styles from "./MiniSeoIntro.module.scss";

type MiniSeoIntroProps = {
  text: string;
  className?: string;
};

export function MiniSeoIntro({ text, className }: MiniSeoIntroProps) {
  return (
    <p className={[styles.root, className].filter(Boolean).join(" ")}>
      {text}
    </p>
  );
}
