import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

const ConfirmationPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Affichage du toast après un délai de 3 secondes
    const timer = setTimeout(() => {
      toast.success('Message envoyé ! Nous vous recontacterons dans les plus brefs délais. Merci !');
      // Actualisation de la page après l'affichage du toast
      router.reload();
    }, 3000);

    // Nettoyage du timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Contenu de votre page de confirmation */}
    </div>
  );
};

export default ConfirmationPage;
