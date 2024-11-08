const Link = ({ ahref, title, subtitle }: { ahref: string; title: string; subtitle: string }) => {
  return (
    <div className={'w-auto'}>
      <a
        href={ahref}
        // className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        className="light:bg-blue-300 group rounded-lg border px-5 py-4 dark:bg-amber-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 bg-emerald-200 text-2xl font-semibold`}>
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-balance text-sm opacity-50`}>{subtitle}</p>
      </a>
    </div>
  );
};

export default Link;
