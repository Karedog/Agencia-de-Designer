import styles from "./page.module.css";
import Topo from "@/components/Topo/Topo";
import SecaoBanner from "@/components/SecaoBanner/SecaoBanner";
import SecaoExperienciaTrabalho from "@/components/SecaoExperienciaTrabalho/SecaoExperienciaTrabalho";
import Rodape from "@/components/Rodape/Rodape";


export default function Home() {
  return (
    <div className={styles.page}>
      <Topo/>
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
      <Rodape/>
    </div>
  );
}
