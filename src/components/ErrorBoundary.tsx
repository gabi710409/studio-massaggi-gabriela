import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem('gabriela_studio_info');
    } catch {}
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-6 text-center text-[#27342C]">
          <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-stone-200 shadow-xl space-y-4">
            <h2 className="font-serif-brand text-2xl font-bold text-stone-900">
              Studio Massaggi Gabriela
            </h2>
            <p className="text-sm text-stone-600">
              Si è verificato un temporaneo problema di caricamento nella memoria del browser.
            </p>
            <button
              onClick={this.handleReset}
              className="w-full py-3 px-6 rounded-full bg-[#4E6B56] hover:bg-[#3D5643] text-white font-medium text-sm transition-all shadow-md"
            >
              Ripristina e Ricarica Sito
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
