"use client";

import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";

type StatusModalProps = {
  code: "green" | "red";
  title: string;
  actionLabel: string;
  onClose?: () => void;
  children: React.ReactNode;
};

export function StatusModal({ code, title, actionLabel, onClose, children }: StatusModalProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div
            className={`${code === "red" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"} rounded-full p-3 mb-4`}
          >
            {code === "green" ? <Check /> : <X />}
          </div>
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <div className="text-gray-600 mb-4">{children}</div>
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => (onClose ? onClose() : router.push("/"))}
              className="px-4 py-2 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
            >
              {actionLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ErrorModalProps = {
  show: boolean;
  errors: string[];
  onClose: () => void;
};

export function ErrorModal({ show, errors, onClose }: ErrorModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-4 shadow-xl w-full max-w-sm animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 text-red-600 rounded-full p-3 mb-2">
            <X />
          </div>
          <h2 className="text-xl font-semibold mb-1">Error</h2>
          <ul className="list-none space-y-2 text-sm text-gray-700">
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-red-700 text-white rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
