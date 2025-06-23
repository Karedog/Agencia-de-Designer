import styles from "./page.module.css";
import Topo from "@/components/Topo/Topo";

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo/>
    </div>
  );
}
