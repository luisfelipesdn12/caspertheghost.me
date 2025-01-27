import * as React from "react";
import timeline from "../data/timeline";
import TimelineItem from "types/Timeline";
import { ArrowDown } from "@components/icons/ArrowDown";
import styles from "css/timeline.module.scss";
import { classes } from "@lib/classes";
import { tooltip } from "css/skills.module.scss";

const TimelineSection = () => {
  const [viewOlderText, setViewOlderText] = React.useState<string>("View All");
  const [length, setLength] = React.useState<number>(7);

  function showMore() {
    if (length > 7) {
      setLength(7);
      setViewOlderText("View All");
    } else {
      setLength(() => timeline.length);
      setViewOlderText("View less");
    }
  }

  return (
    <section id="timeline">
      <h1 className="section__title">Timeline</h1>
      <div className={styles.timeline}>
        {timeline.slice(0, length).map((item: TimelineItem, idx: number) => {
          const side = idx % 2 === 0 ? styles.left : styles.right;

          return (
            <div key={idx} className={classes(styles.timelineItem, side)}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
                className={styles.timelineItemBody}
              >
                <header className={styles.timelineItemHeader}>
                  <h1>{item.title}</h1>
                  <p aria-label={item.full_date} className={item.full_date ? tooltip : null}>
                    {item.date}
                  </p>
                </header>
                {item.text}
              </a>
            </div>
          );
        })}

        <button onClick={showMore} className={styles.viewOlderBtn}>
          {viewOlderText}
          <ArrowDown style={{ transform: viewOlderText === "View less" ? "rotate(180deg)" : "" }} />
        </button>
      </div>
    </section>
  );
};

export default TimelineSection;
