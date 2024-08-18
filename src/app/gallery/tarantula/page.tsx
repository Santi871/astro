import React from "react";
import Tarantula from "./tarantula";
import FadeInImage from "@/components/FadeInImage";

const TarantulaPage = () => (
  <Tarantula>
    <FadeInImage
      src="https://cdn.discordapp.com/attachments/544305081009438720/1055620346830651412/tarantula.jpg?ex=66c12b0f&is=66bfd98f&hm=f56a41536028a546ae4c9612202ec17615919e25abbde2c3dec433cb331ed336&"
      alt="tarantula"
      className="z-0 object-cover transition-all"
      fill
      priority
      quality={100}
    />
  </Tarantula>
);

export default TarantulaPage;
