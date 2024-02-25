import React from 'react';
import Image from 'next/image';
import { IoCreateOutline } from 'react-icons/io5';

type AuthorCardProps = {
  date?: string;
};
const AuthorCard: React.FC<AuthorCardProps> = ({ date }) => {
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'short',
  });
  return (
    <div className="flex items-center gap-3 rounded-lg border border-dracula-darker-700 px-3 py-3 shadow-md md:px-5">
      <Image
        alt="Jonathan Picazo, author of this blog"
        height={200}
        width={200}
        src="/author.gif"
        className="aspect-square h-[100px] w-[100px] rounded-full"
        priority
      />
      <div>
        <h4 className="text-dracula-purple">Jonathan Picazo</h4>
        <p className="text-dracula-orange">Avid Typer</p>
        {date && (
          <div className="flex items-center text-dracula-darker-300">
            <IoCreateOutline className="mr-1" />
            <time className="text-sm">
              {dateFormatter.format(new Date(date))}
            </time>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorCard;
