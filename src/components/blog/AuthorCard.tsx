import React from "react";
import Image from "next/image";
export const AuthorCard = () => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-double border-dracula-cyan p-6">
      <Image
        alt="Jonathan Picazo, author of this blog"
        height={200}
        width={200}
        src="/images/author.gif"
        className="aspect-square rounded-full"
        priority
      />
      <h4 className="text-dracula-purple">Jonathan Picazo</h4>
      <p className="text-dracula-orange">Avid Typer</p>
    </div>
  );
};
