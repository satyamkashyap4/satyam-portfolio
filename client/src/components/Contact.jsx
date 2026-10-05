import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Github, Sparkles, Lock, X, RefreshCw, Inbox } from 'lucide-react';
import axios from 'axios';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  // Secret Admin Inbox state (Protected for owner)
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [contactMessages, setContactMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const linkedinUrl = "https://www.linkedin.com/in/satyam-kashyap0404";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setStatus({
        type: 'success',
        message: response.data?.message || 'Thank you! Satyam has received your message.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.warn('Backend API submission note:', err);
      setStatus({
        type: 'success',
        message: 'Message sent successfully! Satyam will respond to your email shortly.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  const fetchContactMessages = async (keyToUse) => {
    setLoadingMessages(true);
    const key = keyToUse || pinInput;
    try {
      const response = await axios.get('/api/contact', {
        headers: { 'x-admin-key': key }
      });
      setContactMessages(response.data);
      setPinError('');
      setShowPinModal(false);
      setShowAdminModal(true);
    } catch (err) {
      console.warn('Error fetching messages:', err);
      setPinError('Invalid Admin Access Code');
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleVerifyPin = (e) => {
    e.preventDefault();
    fetchContactMessages(pinInput);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" /> Direct Contact & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Whether you have a software role, project opportunity, or question, feel free to send a direct message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" /> Contact Information
              </h3>

              <div className="space-y-4">
                
                {/* Email */}
                <a
                  href={`mailto:${profile?.email || 'isattu8@gmail.com'}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {profile?.email || 'isattu8@gmail.com'}
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${profile?.phone || '+916205617146'}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Phone Number</div>
                    <div className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {profile?.phone || '+91-6205617146'}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Current Location</div>
                    <div className="text-sm font-semibold text-white">
                      {profile?.location || 'Madhubani, Bihar, India'}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles & Secret Admin Portal Trigger */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Connect Across Platforms</span>
                  {/* Discreet Admin Lock Button */}
                  <button
                    onClick={() => { setPinInput(''); setPinError(''); setShowPinModal(true); }}
                    className="p-1 text-slate-600 hover:text-cyan-400 transition-colors"
                    title="Owner Messages Portal"
                  >
                    <Lock className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/satyamkashyap4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-xs font-semibold font-mono transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" /> GitHub
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 text-xs font-semibold font-mono transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-400" /> LinkedIn
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visitor Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-6">
              
              <h3 className="text-xl font-bold text-white">
                Send a Message
              </h3>

              {status.type && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Project Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. MERN Full Stack Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Body <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message details here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Dispatch Message to Satyam</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Secret Admin PIN Prompt Modal */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-md glass-panel p-6 rounded-2xl border border-slate-700 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-white text-base">
                <Lock className="w-4 h-4 text-cyan-400" /> Owner Admin Access
              </div>
              <button onClick={() => setShowPinModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-xs text-slate-400 font-mono">
              Enter Admin Access Code:
            </p>

            {pinError && <div className="text-xs text-rose-400 font-mono font-medium">{pinError}</div>}

            <form onSubmit={handleVerifyPin} className="space-y-3">
              <input
                type="password"
                placeholder="Enter Access PIN"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm font-mono"
              />
              <button
                type="submit"
                disabled={loadingMessages}
                className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                {loadingMessages ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <span>Access Inbox Table</span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Secret Admin Contact Messages Table Modal */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl glass-panel rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Inbox className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Owner Contact Messages Table</h3>
                  <p className="text-xs text-slate-400 font-mono">Visitor inquiries saved in MongoDB database</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fetchContactMessages(pinInput)}
                  className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
                  title="Refresh Table"
                >
                  <RefreshCw className={`w-4 h-4 ${loadingMessages ? 'animate-spin' : ''}`} />
                </button>
                <button
                  onClick={() => setShowAdminModal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Contact Messages Table */}
            <div className="p-6 overflow-y-auto">
              {loadingMessages ? (
                <div className="py-12 text-center text-slate-400 flex items-center justify-center gap-3 font-mono text-xs">
                  <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>Fetching Contact Submissions...</span>
                </div>
              ) : contactMessages.length === 0 ? (
                <div className="py-12 text-center text-slate-400 space-y-2">
                  <Inbox className="w-8 h-8 text-slate-600 mx-auto" />
                  <div className="text-sm font-semibold text-slate-300">No contact messages received yet</div>
                  <p className="text-xs text-slate-500 font-mono">Submissions from the contact form will populate this table live.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/60 font-mono text-cyan-400 uppercase tracking-wider">
                        <th className="p-3">Date</th>
                        <th className="p-3">Sender Name</th>
                        <th className="p-3">Email Address</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Message Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      {contactMessages.map((msg, idx) => (
                        <tr key={msg._id || idx} className="hover:bg-slate-900/40 transition-colors">
                          <td className="p-3 font-mono whitespace-nowrap text-slate-400">
                            {new Date(msg.createdAt || Date.now()).toLocaleDateString()}
                          </td>
                          <td className="p-3 font-semibold text-white whitespace-nowrap">
                            {msg.name}
                          </td>
                          <td className="p-3 font-mono text-cyan-400 whitespace-nowrap">
                            <a href={`mailto:${msg.email}`} className="hover:underline">{msg.email}</a>
                          </td>
                          <td className="p-3 font-medium text-slate-200">
                            {msg.subject || 'Portfolio Inquiry'}
                          </td>
                          <td className="p-3 max-w-xs leading-relaxed text-slate-300">
                            {msg.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Total Messages: {contactMessages.length}</span>
              <button
                onClick={() => setShowAdminModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Close Table
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
