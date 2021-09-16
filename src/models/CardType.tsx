export const CardType = {
  ["Work"]: {
    backgroundColor: "hsl(15, 100%, 70%)",
    iconUrl: "/images/icon-work.svg"
  },
  ["Play"]: {
    backgroundColor: "hsl(195, 74%, 62%)",
    iconUrl: "/images/icon-play.svg"
  },
  ["Study"]: {
    backgroundColor: "hsl(348, 100%, 68%)",
    iconUrl: "/images/icon-study.svg"
  },
  ["Exercise"]: {
    backgroundColor: "hsl(145, 58%, 55%)",
    iconUrl: "/images/icon-exercise.svg"
  },
  ["Social"]: {
    backgroundColor: "hsl(264, 64%, 52%)",
    iconUrl: "/images/icon-social.svg"
  },
  ["Self Care"]: {
    backgroundColor: "hsl(43, 84%, 65%)",
    iconUrl: "/images/icon-self-care.svg"
  }
} as const;

export type CardTypeKey = keyof typeof CardType;
