'use client';

import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface OngezeefWarningDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function OngezeefWarningDialog({ open, onConfirm, onCancel }: OngezeefWarningDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onCancel(); }}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
            <AlertTriangle className="h-6 w-6 text-amber-600" />
          </div>
          <DialogTitle className="text-center">Let op: ongezeefd hout</DialogTitle>
          <DialogDescription className="text-center text-stone-600">
            Dit is een OP=OP product. Het hout is <strong className="text-stone-900">niet gezeefd</strong>,
            waardoor er kleine blokjes (2 a 3cm), houtsplinters en ander afval tussen kan zitten.
            De prijs is hierop aangepast.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:flex-col gap-2">
          <Button
            onClick={onConfirm}
            className="w-full bg-orange-500 hover:bg-orange-600"
          >
            Ik begrijp het, toevoegen
          </Button>
          <Button
            variant="ghost"
            onClick={onCancel}
            className="w-full"
          >
            Annuleren
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/**
 * Check if a product requires the ongezeefd warning dialog
 */
export function isOngezeefProduct(name: string): boolean {
  return name.toLowerCase().includes('op=op');
}
