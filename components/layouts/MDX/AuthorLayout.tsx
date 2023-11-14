import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, occupation, company } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl">Guilherme Vieira</h1>
          <h2 className="text-sm font-normal md:text-base">
            {occupation}{' '}
            <a className="underlineOpen" href="https://www.castgroup.com.br/">
              {company}
            </a>
          </h2>
        </div>
      </div>
  <div className="flex items-center text-xl">
    <div>
      <p>
        I am currently a{' '}
        <b className="font-semibold">Software Developer</b> at{' '}
        <a
          href="https://www.castgroup.com.br/"
          className="underlineOpen font-semibold"
        >
          <b>Cast Group</b>
        </a>
        . I am a Computer Science student, and I really enjoy solving problems,
        improving algorithms, and building software. In my current role, I work
        with various technologies, including{' '}
        <b className="font-semibold">
          Java, Spring Boot, PHP, Laravel, TailwindCSS, Bootstrap, AngularJS,
          TypeScript, SQL, and PostgreSQL.
        </b>
      </p>
    </div>
    <img
      alt="Guilherme"
      height={210}
      width={240}
      src={'/static/images/avatar.png' || ''}
      className="rounded-t-lg object-scale-down grayscale"
    />
  </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
