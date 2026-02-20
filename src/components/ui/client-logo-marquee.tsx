const clients = [
  'Sony Music',
  'Paramount Pictures',
  'Live Nation',
  'Fortune 500',
  'Enterprise Leaders',
  'Global Innovators',
  'Industry Pioneers',
  'Award Winners',
]

function ClientLogoMarquee() {
  return (
    <div className="relative overflow-hidden py-10 select-none" style={{ background: 'var(--stone-100)' }}>
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to right, var(--stone-100), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{ background: 'linear-gradient(to left, var(--stone-100), transparent)' }} />

      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 35s linear infinite' }}>
        {['a', 'b'].flatMap((set) =>
          clients.map((client) => (
            <span
              key={`${set}-${client}`}
              className="inline-flex items-center mx-10 text-sm font-medium tracking-wide uppercase"
              style={{ color: 'var(--stone-400)' }}
            >
              <span
                className="w-1 h-1 rounded-full mr-4"
                style={{ background: 'var(--stone-300)' }}
              />
              {client}
            </span>
          )),
        )}
      </div>
    </div>
  )
}

export { ClientLogoMarquee }
