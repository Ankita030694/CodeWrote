'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  createdAt: string;
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [leadSearchTerm, setLeadSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [leadPage, setLeadPage] = useState(1);
  const leadsPerPage = 50;
  
  const primaryColor = '#E61F93';

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const resp = await fetch('/api/leads');
      const data = await resp.json();
      if (Array.isArray(data)) setLeads(data);
    } catch (e) {
      console.error(e);
    }
  };

  const filteredLeads = leads.filter(l =>
    l.name?.toLowerCase().includes(leadSearchTerm.toLowerCase()) ||
    l.email?.toLowerCase().includes(leadSearchTerm.toLowerCase()) ||
    l.phone?.includes(leadSearchTerm) ||
    l.state?.toLowerCase().includes(leadSearchTerm.toLowerCase())
  );
  const totalLeadPages = Math.max(1, Math.ceil(filteredLeads.length / leadsPerPage));
  const currentLeads = filteredLeads.slice((leadPage - 1) * leadsPerPage, leadPage * leadsPerPage);

  const now = new Date();
  const leadsThisMonth = leads.filter(l => {
    const d = new Date(l.createdAt);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const leadsToday = leads.filter(l => {
    const d = new Date(l.createdAt);
    return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  return (
    <>
      {/* Top Header */}
      <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white shrink-0">
        <div>
          <h2 className="text-2xl font-black text-black">Leads Dashboard</h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest -mt-1">
            Dashboard / leads
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black font-bold border border-gray-200">
            AB
          </div>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8 bg-[#FAFAFA]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6 pb-20"
        >
          {/* Lead Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Total Leads', value: leads.length, color: primaryColor },
              { label: 'This Month', value: leadsThisMonth, color: '#7C3AED' },
              { label: 'Today', value: leadsToday, color: '#059669' },
            ].map(s => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-3xl p-6 flex items-center justify-between shadow-sm">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{s.label}</p>
                  <p className="text-4xl font-black" style={{ color: s.color }}>{s.value}</p>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: s.color + '15' }}>
                  <svg className="w-7 h-7" fill="none" stroke={s.color} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Search + Refresh */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-96">
              <FontAwesomeIcon icon={faSearch} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                type="text"
                placeholder="Search by name, email, phone, state..."
                className="w-full pl-14 pr-4 py-4 bg-white border border-gray-100 rounded-3xl outline-none text-black font-medium"
                value={leadSearchTerm}
                onChange={e => { setLeadSearchTerm(e.target.value); setLeadPage(1); }}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 font-bold">{filteredLeads.length} results</span>
              <button onClick={fetchLeads} className="bg-pink-50 text-[#E61F93] px-6 py-3 rounded-full text-xs font-black uppercase hover:bg-[#E61F93] hover:text-white transition-all">Refresh</button>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-50 text-black">
                <thead className="bg-[#FAFAFA]">
                  <tr>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Client</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Email</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Phone</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">State</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Message</th>
                    <th className="px-8 py-5 text-left text-[10px] font-black uppercase text-gray-400 tracking-widest">Date</th>
                    <th className="px-8 py-5"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {currentLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                            <span className="text-[#E61F93] font-black text-sm">{lead.name?.charAt(0)?.toUpperCase()}</span>
                          </div>
                          <span className="font-bold text-black text-sm">{lead.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-500 text-sm">{lead.email}</td>
                      <td className="px-8 py-6 text-gray-500 text-sm font-mono">{lead.phone}</td>
                      <td className="px-8 py-6">
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-black uppercase text-gray-600">{lead.state}</span>
                      </td>
                      <td className="px-8 py-6 text-gray-400 text-sm max-w-xs">
                        <p className="line-clamp-2 leading-relaxed italic">{lead.message}</p>
                      </td>
                      <td className="px-8 py-6 text-xs font-bold text-gray-300 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </td>
                      <td className="px-8 py-6">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="text-[10px] font-black uppercase text-[#E61F93] hover:underline tracking-widest"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredLeads.length === 0 && (
                    <tr><td colSpan={7} className="px-10 py-24 text-center text-gray-300 font-black uppercase tracking-widest text-sm">No leads found</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lead Pagination */}
          {totalLeadPages > 1 && (
            <div className="flex justify-center items-center gap-6 py-6">
              <button onClick={() => setLeadPage(p => Math.max(1, p - 1))} disabled={leadPage === 1} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <div className="bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                <span className="font-black text-black text-sm">PAGE {leadPage} OF {totalLeadPages}</span>
              </div>
              <button onClick={() => setLeadPage(p => Math.min(totalLeadPages, p + 1))} disabled={leadPage === totalLeadPages} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-all text-black">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setSelectedLead(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[40px] p-10 max-w-lg w-full shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center">
                    <span className="text-[#E61F93] font-black text-2xl">{selectedLead.name?.charAt(0)?.toUpperCase()}</span>
                  </div>
                  <div>
                    <h2 className="font-black text-2xl text-black">{selectedLead.name}</h2>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{selectedLead.state}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedLead(null)} className="text-gray-300 hover:text-black transition-colors">
                  <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-gray-400">Email Address</span>
                  <span className="font-bold text-sm text-black">{selectedLead.email}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-gray-400">Phone Number</span>
                  <span className="font-bold text-sm font-mono text-black">{selectedLead.phone}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-gray-400">Submission Date</span>
                  <span className="font-bold text-sm text-black">
                    {new Date(selectedLead.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-gray-400 mb-2 block">Message Details</span>
                <div className="bg-pink-50/50 p-6 rounded-3xl border border-pink-100">
                  <p className="text-black leading-relaxed italic">{selectedLead.message}</p>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => window.location.href = `mailto:${selectedLead.email}`}
                  className="w-full bg-black text-white py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#E61F93] transition-colors shadow-xl shadow-pink-500/10"
                >
                  Reply via Email
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
