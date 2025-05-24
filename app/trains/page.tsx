import ClientOnly from "../../components/ClientOnly";
import TrainsPageContent from "../../components/TrainsPageContent";

export default function TrainsPage() {
  return (
    <ClientOnly>
      <TrainsPageContent />
    </ClientOnly>
  );
}
