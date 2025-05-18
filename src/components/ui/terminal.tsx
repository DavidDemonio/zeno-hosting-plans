
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Terminal as TerminalIcon, Server, X, Command, Cpu } from "lucide-react";

interface TerminalProps {
  language: string;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  isError?: boolean;
}

export function Terminal({ language }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pingInProgress, setPingInProgress] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Refresh history when language changes
  useEffect(() => {
    // Reset history with welcome message in selected language
    setHistory([{
      command: "",
      output: (
        <div className="text-blue-400">
          {language === 'es' 
            ? 'Bienvenido a la terminal ZenoScale VPS. Escribe \'help\' para ver los comandos disponibles.' 
            : 'Welcome to ZenoScale VPS terminal. Type \'help\' to see available commands.'}
        </div>
      ),
    }]);
  }, [language]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    const terminalElement = terminalRef.current;
    
    if (terminalElement) {
      terminalElement.addEventListener('click', handleClick);
      return () => terminalElement.removeEventListener('click', handleClick);
    }
  }, []);

  const commands = {
    help: {
      execute: () => {
        return (
          <div className="text-white">
            <div className="font-bold text-blue-400 mb-1">{language === 'es' ? 'Comandos disponibles:' : 'Available commands:'}</div>
            <div className="ml-2">
              <div className="flex items-start">
                <span className="text-blue-400 font-mono w-16">system</span>
                <span>{language === 'es' ? 'Mostrar información del sistema' : 'Display system information'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 font-mono w-16">specs</span>
                <span>{language === 'es' ? 'Mostrar especificaciones VPS' : 'Show VPS specifications'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 font-mono w-16">uptime</span>
                <span>{language === 'es' ? 'Mostrar tiempo de actividad del servidor' : 'Display server uptime'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 font-mono w-16">ping</span>
                <span>{language === 'es' ? 'Probar latencia de conexión' : 'Test connection latency'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-400 font-mono w-16">clear</span>
                <span>{language === 'es' ? 'Limpiar pantalla de terminal' : 'Clear terminal screen'}</span>
              </div>
            </div>
          </div>
        );
      },
    },
    system: {
      execute: () => {
        return (
          <div className="text-white">
            <div className="font-bold text-blue-400 mb-1">ZenoScale System Info</div>
            <div className="ml-2">
              <div>{language === 'es' ? 'Sistema operativo: Linux ZenoScale 5.15' : 'Operating System: Linux ZenoScale 5.15'}</div>
              <div>{language === 'es' ? 'Kernel: 5.15.0-zenohost' : 'Kernel: 5.15.0-zenohost'}</div>
              <div>{language === 'es' ? 'Arquitectura: x86_64' : 'Architecture: x86_64'}</div>
              <div>{language === 'es' ? 'Virtualización: KVM' : 'Virtualization: KVM'}</div>
              <div>{language === 'es' ? 'CPU: AMD Ryzen 9' : 'CPU: AMD Ryzen 9'}</div>
            </div>
          </div>
        );
      },
    },
    specs: {
      execute: () => {
        // Improved ASCII Art for ZenoScale logo
        const logo = [
          "      ███████ ███████ ███    ██  ██████      ",
          "         ███  ██      ████   ██ ██    ██     ",
          "        ███   █████   ██ ██  ██ ██    ██     ",
          "       ███    ██      ██  ██ ██ ██    ██     ",
          "      ███████ ███████ ██   ████  ██████      ",
          "                ███████  ██████  █████  ██      ███████ ",
          "               ██      ██       ██   ██ ██      ██      ",
          "              ███████ ██       ███████ ██      █████   ",
          "                   ██ ██       ██   ██ ██      ██      ",
          "              ███████  ██████  ██   ██ ███████ ███████ "
        ];

        const specs = [
          `${language === 'es' ? 'Host: ZenoScale VPS' : 'Host: ZenoScale VPS'}`,
          `${language === 'es' ? 'CPU: AMD Ryzen 9 5950X (16C/32T)' : 'CPU: AMD Ryzen 9 5950X (16C/32T)'}`,
          `${language === 'es' ? 'RAM: 64GB DDR4 3600MHz' : 'RAM: 64GB DDR4 3600MHz'}`,
          `${language === 'es' ? 'Disco: 1TB NVMe SSD' : 'Disk: 1TB NVMe SSD'}`,
          `${language === 'es' ? 'Red: 10Gbps, Sin límites' : 'Network: 10Gbps, Unlimited'}`,
          `${language === 'es' ? 'Uptime: 99.99% garantizado' : 'Uptime: 99.99% guaranteed'}`,
          `${language === 'es' ? 'Protección: DDoS avanzada' : 'Protection: Advanced DDoS'}`,
          `${language === 'es' ? 'Sistema: ZenoScale Linux 5.15.0' : 'System: ZenoScale Linux 5.15.0'}`
        ];

        // Updated Xeon specs with the specific model requested
        const xeonSpecs = [
          `${language === 'es' ? 'Host: ZenoScale VPS' : 'Host: ZenoScale VPS'}`,
          `${language === 'es' ? 'CPU: Intel Xeon E-2276G (12) @ 4.900GHz' : 'CPU: Intel Xeon E-2276G (12) @ 4.900GHz'}`,
          `${language === 'es' ? 'RAM: 128GB DDR4 ECC' : 'RAM: 128GB DDR4 ECC'}`,
          `${language === 'es' ? 'Disco: 2TB NVMe SSD' : 'Disk: 2TB NVMe SSD'}`,
          `${language === 'es' ? 'Red: 10Gbps, Sin límites' : 'Network: 10Gbps, Unlimited'}`,
          `${language === 'es' ? 'Uptime: 99.99% garantizado' : 'Uptime: 99.99% guaranteed'}`,
          `${language === 'es' ? 'Protección: DDoS avanzada' : 'Protection: Advanced DDoS'}`,
          `${language === 'es' ? 'Sistema: ZenoScale Linux 5.15.0' : 'System: ZenoScale Linux 5.15.0'}`
        ];

        // Choose AMD Ryzen or Intel Xeon randomly (50/50)
        const selectedSpecs = Math.random() > 0.5 ? specs : xeonSpecs;
        
        return (
          <div className="text-white font-mono">
            <div className="flex flex-col md:flex-row">
              <div className="text-blue-400 mr-2 md:mr-8">
                {logo.map((line, i) => <div key={i}>{line}</div>)}
              </div>
              <div className="flex flex-col justify-center mt-4 md:mt-0">
                {selectedSpecs.map((spec, i) => (
                  <div key={i} className={i === 0 ? "text-blue-400 font-bold" : ""}>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      },
    },
    uptime: {
      execute: () => {
        // Generate random uptime for demonstration
        const days = Math.floor(Math.random() * 365) + 30;
        const hours = Math.floor(Math.random() * 24);
        const mins = Math.floor(Math.random() * 60);
        
        return (
          <div className="text-white">
            <div className="font-bold text-blue-400 mb-1">{language === 'es' ? 'Tiempo de actividad del servidor' : 'Server Uptime'}</div>
            <div className="ml-2">
              <div>
                {language === 'es' 
                  ? `${days} días, ${hours} horas, ${mins} minutos` 
                  : `${days} days, ${hours} hours, ${mins} minutes`
                }
              </div>
              <div className="text-blue-400">
                {language === 'es' 
                  ? 'Disponibilidad: 99.99%' 
                  : 'Availability: 99.99%'
                }
              </div>
            </div>
          </div>
        );
      },
    },
    ping: {
      execute: () => {
        return (
          <div className="text-white">
            <div className="font-bold text-blue-400 mb-1">{language === 'es' ? 'Prueba de Latencia' : 'Latency Test'}</div>
            <div className="ml-2">
              <div className="text-blue-400">{language === 'es' ? 'Realizando ping...' : 'Performing ping test...'}</div>
              <div className="ping-results">
                {pingInProgress ? (
                  <div className="animate-pulse">
                    <div>{language === 'es' ? 'Probando conexión...' : 'Testing connection...'}</div>
                  </div>
                ) : (
                  <>
                    <div>fi1.zenoscale.es: 8ms</div>
                    <div>dash.zenoscale.es: 12ms</div>
                    <div>google.com: 15ms</div>
                    <div>cloudflare.com: 5ms</div>
                    <div className="text-blue-400 mt-1">
                      {language === 'es' 
                        ? 'Promedio: 10ms' 
                        : 'Average: 10ms'
                      }
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      },
    },
    clear: {
      execute: () => {
        // The actual clear action happens in handleCommand
        return null;
      },
    },
  };

  const simulatePing = () => {
    setPingInProgress(true);
    setTimeout(() => {
      setPingInProgress(false);
    }, 1000);
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    
    if (!trimmedInput) return;
    
    let newHistory: CommandOutput[];
    
    // Keep command history for up/down arrows
    setCommandHistory(prev => [trimmedInput, ...prev]);
    setHistoryIndex(-1);
    
    if (trimmedInput === "clear") {
      newHistory = [{
        command: "",
        output: (
          <div className="text-blue-400">
            {language === 'es' 
              ? 'Terminal limpiada. Escribe \'help\' para ver los comandos disponibles.' 
              : 'Terminal cleared. Type \'help\' to see available commands.'}
          </div>
        ),
      }];
    } else {
      // Find the command in our commands object
      const commandName = trimmedInput.split(" ")[0];
      const command = commands[commandName as keyof typeof commands];
      
      // Special case for ping command to simulate real ping
      if (commandName === "ping") {
        simulatePing();
      }
      
      // Execute the command if it exists
      const output = command
        ? command.execute()
        : <div className="text-red-400">
            {language === 'es' 
              ? `Comando no encontrado: ${commandName}. Escribe 'help' para ver los comandos disponibles.` 
              : `Command not found: ${commandName}. Type 'help' to see available commands.`}
          </div>;
      
      newHistory = [
        ...history,
        {
          command: trimmedInput,
          output,
          isError: !command,
        },
      ];
    }
    
    setHistory(newHistory);
    setInput("");
  };

  // Handle arrow up/down for command history
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const nextIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(nextIndex);
      if (nextIndex >= 0 && commandHistory[nextIndex]) {
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(nextIndex);
      if (nextIndex >= 0 && commandHistory[nextIndex]) {
        setInput(commandHistory[nextIndex]);
      } else {
        setInput("");
      }
    }
  };

  return (
    <div className="bg-black bg-opacity-90 rounded-lg overflow-hidden border border-zinc-800 shadow-lg w-full max-w-3xl mx-auto">
      {/* Terminal header */}
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center text-white space-x-2">
          <TerminalIcon className="h-4 w-4 text-blue-500" />
          <span className="text-sm font-mono">Terminal</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>
      </div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="p-4 h-80 overflow-y-auto font-mono text-sm text-white bg-black bg-opacity-90"
      >
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.command && (
              <div className="flex items-center text-white mb-1">
                <span className="text-blue-400 mr-2">root@zenoscale:~$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className={cn(
              "ml-0",
              item.isError ? "text-red-400" : "text-white"
            )}>
              {item.output}
            </div>
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center mt-1 text-white">
          <span className="text-blue-400 mr-2">root@zenoscale:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow bg-transparent outline-none border-none text-white font-mono"
            autoFocus
          />
        </form>
      </div>
      
      {/* Terminal footer */}
      <div className="bg-zinc-900 px-4 py-1 flex justify-between items-center text-xs text-zinc-500 font-mono">
        <span>ZenoScale</span>
        <span>VPS Terminal v1.2</span>
        <span>{history.length - 1} cmd(s)</span>
      </div>
    </div>
  );
}
