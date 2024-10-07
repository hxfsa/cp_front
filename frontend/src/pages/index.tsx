import Countries from "../components/Countries";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Accueil"
      description="Pays"
    >
      <Countries />
    </Layout>
  );
}