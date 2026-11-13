'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  AlertCircle, 
  Loader2,
  Paperclip,
  FileText,
  X
} from 'lucide-react';
import EngineeringBlogSection from '../Components/EngineeringBlogSection';
import { company } from '../data/company';

interface AttachedFile {
  name: string;
  size: number;
  type: string;
  base64?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '', // Honeypot field
  });

  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [mailtoFallback, setMailtoFallback] = useState('');

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setFileError(null);

    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
    const MAX_TOTAL_FILES = 5;

    if (attachedFiles.length + files.length > MAX_TOTAL_FILES) {
      setFileError(`You can attach up to ${MAX_TOTAL_FILES} files in total.`);
      return;
    }

    Array.from(files).forEach((file) => {
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`File "${file.name}" exceeds the 10 MB limit.`);
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setAttachedFiles((prev) => [
          ...prev,
          {
            name: file.name,
            size: file.size,
            type: file.type || 'application/octet-stream',
            base64: reader.result as string,
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (indexToRemove: number) => {
    setAttachedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    setFileError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
        attachments: attachedFiles.map((f) => ({
          name: f.name,
          size: f.size,
          type: f.type,
          base64: f.base64,
        })),
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus('success');
      } else {
        const message = data?.error || 'Unable to deliver your message at this time.';
        const attachmentsNotice = attachedFiles.length > 0
          ? `\n\nAttachments: ${attachedFiles.map((f) => `${f.name} (${Math.round(f.size / 1024)} KB)`).join(', ')} (Please attach these files to your email)`
          : '';
        const fallbackUrl = data?.mailtoFallback || `mailto:${company.email || 'enquiry@improxgroup.com'}?subject=${encodeURIComponent('Project Scoping Inquiry: ' + formData.company)}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nCompany: ${formData.company}\n\nProject Scope & Requirements:\n${formData.message}${attachmentsNotice}`
        )}`;
        setErrorMessage(message);
        setMailtoFallback(fallbackUrl);
        setStatus('error');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred while sending your request. Please email us directly.');
      setMailtoFallback(`mailto:${company.email || 'enquiry@improxgroup.com'}?subject=${encodeURIComponent('Project Scoping Inquiry')}`);
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Editorial Subpage Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0033a0] font-medium">Contact &amp; Scoping</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
              Engineering Consultation
            </p>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Start your technical engagement.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have an upcoming software initiative, cloud modernization project, or architecture review? Connect directly with our engineering team for technical scoping.
            </p>

            <div className="pt-2 flex flex-wrap gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0]" />
                <span>NDA-Protected Discussion</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0]" />
                <span>Direct Access to Technical Leads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0033a0]" />
                <span>Transparent Scope &amp; Milestones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Information */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Interactive Scoping Form */}
            <div className="lg:col-span-7">
              <div className="border border-slate-200 rounded-[6px] p-8 sm:p-10 bg-slate-50">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Project Scoping Form
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    Share your requirements, architecture notes, or attach an RFP document. Our engineering leads will review options and technical roadmap with you.
                  </p>
                </div>

                {status === 'success' ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-[6px] space-y-4 text-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-slate-900">Inquiry Received</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Improx Tech. Our engineering team has received your inquiry and will review your technical requirements promptly.
                    </p>
                    <button 
                      onClick={() => {
                        setStatus('idle');
                        setAttachedFiles([]);
                      }}
                      className="text-xs font-semibold text-[#0033a0] underline mt-4 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field (hidden from real users) */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="hp_website">Leave this field blank</label>
                      <input
                        id="hp_website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 bg-amber-50 border border-amber-300 rounded-[6px] text-xs text-amber-900 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold mb-1">Notice</div>
                          <p>{errorMessage}</p>
                          {mailtoFallback && (
                            <a
                              href={mailtoFallback}
                              className="inline-block mt-2 font-semibold text-[#0033a0] underline"
                            >
                              Click here to email our engineering desk directly &rarr;
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-[6px] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0033a0] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-[6px] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0033a0] bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-2.5 rounded-[6px] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0033a0] bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-2.5 rounded-[6px] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0033a0] bg-white"
                        />
                      </div>
                    </div>

                    {/* Project Attachments & Technical Documentation (Replaced Scoping Dropdowns) */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider">
                          Project Attachments &amp; Documentation (Optional)
                        </label>
                        <span className="text-[11px] text-slate-500">Max 10 MB per file • Up to 5 files</span>
                      </div>

                      {/* Dropzone Container */}
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setIsDragging(false);
                          handleFileSelect(e.dataTransfer.files);
                        }}
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative rounded-[6px] border-2 border-dashed p-6 transition-all text-center cursor-pointer ${
                          isDragging
                            ? 'border-[#0033a0] bg-blue-50/60'
                            : 'border-slate-300 hover:border-[#0033a0] bg-white hover:bg-slate-50/70'
                        }`}
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.png,.jpg,.jpeg"
                          onChange={(e) => handleFileSelect(e.target.files)}
                          className="hidden"
                        />

                        <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                          <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0033a0]">
                            <Paperclip className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-slate-800">
                              <span className="text-[#0033a0] underline">Click to upload files</span> or drag and drop here
                            </p>
                            <p className="text-[11px] text-slate-500 mt-1">
                              Attach RFP, architecture diagrams, technical specifications, or requirements (PDF, DOCX, XLSX, ZIP, PNG, JPG)
                            </p>
                          </div>
                        </div>
                      </div>

                      {fileError && (
                        <p className="text-xs text-rose-600 mt-2 flex items-center gap-1.5 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{fileError}</span>
                        </p>
                      )}

                      {/* Attached Files List */}
                      {attachedFiles.length > 0 && (
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                            <span>Attached Documentation ({attachedFiles.length})</span>
                            <button
                              type="button"
                              onClick={() => setAttachedFiles([])}
                              className="text-slate-400 hover:text-rose-600 font-normal lowercase tracking-normal transition-colors"
                            >
                              clear all
                            </button>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {attachedFiles.map((file, idx) => (
                              <div
                                key={`${file.name}-${idx}`}
                                className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-[6px] text-xs shadow-xs"
                              >
                                <div className="flex items-center gap-2 overflow-hidden pr-2">
                                  <FileText className="w-4 h-4 text-[#0033a0] shrink-0" />
                                  <div className="truncate">
                                    <div className="font-medium text-slate-900 truncate" title={file.name}>
                                      {file.name}
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-mono">
                                      {(file.size / 1024).toFixed(0)} KB
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(idx);
                                  }}
                                  className="text-slate-400 hover:text-rose-600 p-1 rounded transition-colors shrink-0"
                                  title="Remove attachment"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 uppercase tracking-wider mb-1.5">
                        Technical Scope &amp; Requirements *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your current systems, engineering objectives, target technologies, and project scope..."
                        className="w-full px-4 py-2.5 rounded-[6px] border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#0033a0] bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0033a0] hover:bg-[#00287a] disabled:opacity-70 text-white font-medium px-8 py-3.5 rounded-[6px] text-sm transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00a3e0] cursor-pointer"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Requirements...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Scoping Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Direct Channels & Office Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="p-8 rounded-[6px] bg-[#000033] text-white space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Direct Technical Inquiries</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Prefer direct communication? Reach out directly via phone or email to initiate a technical discovery conversation.
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-xs">
                  {company.phone && (
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[#00a3e0] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400">Direct Line</div>
                        <span className="font-mono text-sm text-white">{company.formattedPhone}</span>
                      </div>
                    </a>
                  )}

                  {company.email && (
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[#00a3e0] shrink-0" />
                      <div>
                        <div className="text-xs text-slate-400">Inquiry Desk</div>
                        <span className="text-sm text-white">{company.email}</span>
                      </div>
                    </a>
                  )}

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#00a3e0] shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400">Operating Hours</div>
                      <span className="text-white">Monday – Friday: 9:00 AM – 6:00 PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#0033a0]" />
                  <span>United States Corporate Office</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>{company.name}</strong><br />
                  {company.addresses.us.street}<br />
                  {company.addresses.us.city}, {company.addresses.us.region} {company.addresses.us.postalCode}, {company.addresses.us.country}
                </p>
              </div>

              <div className="p-6 rounded-[6px] bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <MapPin className="w-4 h-4 text-[#0033a0]" />
                  <span>India Engineering Delivery Hub</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>{company.name} Delivery Center</strong><br />
                  {company.addresses.india.street}<br />
                  {company.addresses.india.city}, {company.addresses.india.region} {company.addresses.india.postalCode}, {company.addresses.india.country}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Engineering Insights Section */}
      <EngineeringBlogSection 
        title="Featured Engineering Articles"
        subtitle="Technical guides and architectural considerations authored by our engineering team."
      />

    </div>
  );
}
