import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Terminal as TerminalIcon, System, ArrowRight, Clear, Ping } from "lucide-react";

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
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "",
      output: (
        <div className="text-green-400">
          {language === 'es' ? 
            'Bienvenido a la terminal ZenoHost VPS. Escribe \'help\' para ver los comandos disponibles.' : 
            'Welcome to ZenoHost VPS terminal. Type \'help\' to see available commands.'}
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
            <div className="font-bold text-yellow-400 mb-1">{language === 'es' ? 'Comandos disponibles:' : 'Available commands:'}</div>
            <div className="ml-2">
              <div className="flex items-start">
                <span className="text-cyan-400 font-mono w-16">system</span>
                <span>{language === 'es' ? 'Mostrar información del sistema' : 'Display system information'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 font-mono w-16">specs</span>
                <span>{language === 'es' ? 'Mostrar especificaciones VPS' : 'Show VPS specifications'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 font-mono w-16">uptime</span>
                <span>{language === 'es' ? 'Mostrar tiempo de actividad del servidor' : 'Display server uptime'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 font-mono w-16">ping</span>
                <span>{language === 'es' ? 'Probar latencia de conexión' : 'Test connection latency'}</span>
              </div>
              <div className="flex items-start">
                <span className="text-cyan-400 font-mono w-16">clear</span>
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
            <div className="font-bold text-yellow-400 mb-1">ZenoScale System Info</div>
            <div className="ml-2">
              <div>{language === 'es' ? 'Sistema operativo: Linux ZenoScale 5.15' : 'Operating System: Linux ZenoScale 5.15'}</div>
              <div>{language === 'es' ? 'Kernel: 5.15.0-zenohost' : 'Kernel: 5.15.0-zenohost'}</div>
              <div>{language === 'es' ? 'Arquitectura: x86_64' : 'Architecture: x86_64'}</div>
              <div>{language === 'es' ? 'Virtualización: KVM' : 'Virtualization: KVM'}</div>
              <div>{language === 'es' ? 'CPU: Intel Xeon' : 'CPU: Intel Xeon'}</div>
            </div>
          </div>
        );
      },
    },
    specs: {
      execute: () => {
        return (
          <div className="text-white">
            <div className="font-bold text-yellow-400 mb-1">{language === 'es' ? 'Especificaciones del VPS' : 'VPS Specifications'}</div>
            <div className="ml-2">
              <div>{language === 'es' ? 'CPU: 4 núcleos, 3.1GHz' : 'CPU: 4 cores, 3.1GHz'}</div>
              <div>{language === 'es' ? 'RAM: 8GB DDR4' : 'RAM: 8GB DDR4'}</div>
              <div>{language === 'es' ? 'Almacenamiento: 100GB SSD NVMe' : 'Storage: 100GB SSD NVMe'}</div>
              <div>{language === 'es' ? 'Red: 1Gbps, tráfico ilimitado' : 'Network: 1Gbps, unlimited traffic'}</div>
              <div>{language === 'es' ? 'Protección DDoS: Incluida' : 'DDoS Protection: Included'}</div>
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
            <div className="font-bold text-yellow-400 mb-1">{language === 'es' ? 'Tiempo de actividad del servidor' : 'Server Uptime'}</div>
            <div className="ml-2">
              <div>
                {language === 'es' 
                  ? `${days} días, ${hours} horas, ${mins} minutos` 
                  : `${days} days, ${hours} hours, ${mins} minutes`
                }
              </div>
              <div className="text-green-400">
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
            <div className="font-bold text-yellow-400 mb-1">{language === 'es' ? 'Prueba de Latencia' : 'Latency Test'}</div>
            <div className="ml-2">
              <div className="text-green-400">{language === 'es' ? 'Realizando ping...' : 'Performing ping test...'}</div>
              <div>zenoscale.es: 8ms</div>
              <div>google.com: 15ms</div>
              <div>aws-eu-west: 22ms</div>
              <div>cloudflare: 5ms</div>
              <div className="text-green-400 mt-1">
                {language === 'es' 
                  ? 'Promedio: 12.5ms' 
                  : 'Average: 12.5ms'
                }
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
          <div className="text-green-400">
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
          <TerminalIcon className="h-4 w-4 text-red-500" />
          <span className="text-sm font-mono">Terminal</span>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
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
                <span className="text-green-400 mr-2">root@zenohost:~$</span>
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
          <span className="text-green-400 mr-2">root@zenohost:~$</span>
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
        <span>Inactivo</span>
        <span>Terminal v1.0</span>
        <span>1 cmd(s)</span>
      </div>
    </div>
  );
}
