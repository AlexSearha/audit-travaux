const ThemeBlock = ({
  children,
  theme,
  title,
  status,
}: {
  children: React.ReactNode;
  theme: string;
  title: string;
  status?: string;
}) => (
  <section className="mb-16 scroll-mt-10">
    <div className="border-b-2 border-slate-900 pb-2 mb-6 flex justify-between items-end flex-wrap gap-4">
      <h2 className="text-2xl font-black text-slate-900 uppercase">
        <span className="text-red-600">{theme} :</span> {title}
      </h2>
      {status && (
        <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">
          {status}
        </span>
      )}
    </div>
    <div className="text-slate-800 leading-relaxed space-y-4">{children}</div>
  </section>
);

export default ThemeBlock;
