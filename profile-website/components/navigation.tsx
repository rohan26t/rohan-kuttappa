'use client';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);
  return <header className="site-header"><div className="container nav-inner"><a href="#main" className="wordmark header-wordmark" aria-label="Major TM Rohan Kuttappa, home" onClick={()=>setOpen(false)}>Major TM Rohan Kuttappa</a><Button variant="ghost" className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>{open?<X />:<Menu />}</Button><nav id="primary-nav" aria-label="Main navigation" className={open?'navigation is-open':'navigation'}>{['About','Experience','Expertise','Contact'].map(item=><a href={`#${item.toLowerCase()}`} onClick={()=>setOpen(false)} key={item}>{item}</a>)}<a className="nav-contact" href="mailto:rohan26t@gmail.com">Let’s talk <ArrowUpRight size={16} /></a></nav></div></header>;
}
