'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { JobPosition } from '@/app/data/careersData';

interface ApplyModalProps {
  position: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplyModal({ position, isOpen, onClose }: ApplyModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [githubLinkedin, setGithubLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !position) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission / provide mailto fallback
    const subject = encodeURIComponent(`Application for ${position.title} - ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nProfile / GitHub: ${githubLinkedin}\n\nNote / Experience Summary:\n${message}`
    );
    
    // Trigger mailto client as standard backup
    window.location.href = `mailto:enquiry@improxgroup.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setGithubLinkedin('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-[8px] shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-[#000033] text-white p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] font-mono text-[#00a3e0] uppercase tracking-wider block mb-1">
              {position.department}
            </span>
            <h3 id="modal-title" className="text-xl font-bold tracking-tight text-white">
              Apply for {position.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              {position.location} &bull; {position.type}
            </p>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-[4px] text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Application Initialized!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{fullName || 'Candidate'}</strong>. Your application draft has been prepared for our engineering recruitment pod.
              </p>
              <p className="text-xs text-slate-500">
                You can also email your CV directly to <a href="mailto:enquiry@improxgroup.com" className="text-[#0033a0] font-semibold underline">enquiry@improxgroup.com</a>.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="bg-[#0033a0] hover:bg-[#00287a] text-white font-medium px-6 py-2.5 rounded-[6px] text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3 py-2 border border-slate-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] focus:border-transparent text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3 py-2 border border-slate-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] focus:border-transparent text-slate-900"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 border border-slate-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] focus:border-transparent text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  GitHub / LinkedIn / Portfolio URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={githubLinkedin}
                  onChange={(e) => setGithubLinkedin(e.target.value)}
                  placeholder="https://github.com/username or linkedin.com/in/username"
                  className="w-full px-3 py-2 border border-slate-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Brief Note / Summary of Relevant Engineering Work
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about complex systems you have designed, repositories you have authored, or why you want to join Improx Tech."
                  className="w-full px-3 py-2 border border-slate-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#0033a0] focus:border-transparent text-slate-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Submits directly to our engineering leads</span>
                </span>
                <button
                  type="submit"
                  className="bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold px-5 py-2.5 rounded-[4px] text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
