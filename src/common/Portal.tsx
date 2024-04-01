import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = PropsWithChildren<{
  elementId: string;
}>;

const Portal = ({ children, elementId }: PortalProps) => {
  const mount = document.getElementById(elementId);
  const el = document.createElement('div');

  if (!mount) {
    throw new Error(`No element with id ${elementId}`);
  }

  useEffect(() => {
    mount.appendChild(el);

    return () => {
      mount.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
