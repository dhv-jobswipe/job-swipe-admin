'use client';

import { Button } from '@/components/ui/button';
import { usePopupStore } from '@/store/popupStore';
import { CircleAlert } from 'lucide-react';

export default function Popup() {
  const { isOpen, description, confirmAction, closePopup } = usePopupStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-in fade-in-0">
      <div className="fixed left-[50%] top-[50%] z-[100] grid max-h-[92vh] w-max translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-xl bg-background duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg">
        <div className="flex w-[450px] flex-col px-10 py-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <CircleAlert size={60} color="#ef4444" strokeWidth={1.75} />

            <p className="text-2xl font-semibold text-[#1c2e63]">
              Are you sure?
            </p>
          </div>

          {description && (
            <div className="my-2">
              <p className="text-pretty text-center text-[#314889]">
                {description}
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-row justify-around gap-4">
            <Button
              variant="destructive"
              className="w-full"
              onClick={confirmAction}
            >
              Confirm
            </Button>

            <Button variant="outline" className="w-full" onClick={closePopup}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
