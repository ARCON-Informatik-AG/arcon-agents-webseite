export type AgentNode = { id: string; x: number; y: number; hub?: boolean };
export type AgentLink = [string, string];

type AgentNetworkProps = {
  nodes: AgentNode[];
  links: AgentLink[];
  skipPulseEvery?: number;
};

export function AgentNetwork({ nodes, links, skipPulseEvery }: AgentNetworkProps) {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {links.map(([fromId, toId], index) => {
        const from = nodeById.get(fromId);
        const to = nodeById.get(toId);
        if (!from || !to) return null;

        return (
          <g key={`${fromId}-${toId}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="#1bcb80"
              strokeOpacity={0.15}
              strokeWidth={1}
            />
            {!(skipPulseEvery && index % skipPulseEvery === 0) && (
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                pathLength={100}
                strokeDasharray="12 112"
                stroke="#1bcb80"
                strokeOpacity={0.8}
                strokeWidth={1.5}
                className="animate-agent-pulse"
                style={{
                  animationDelay: `${index * 0.7}s`,
                  animationDuration: `${3 + (index % 3)}s`,
                }}
              />
            )}
          </g>
        );
      })}

      {nodes.map((node) => (
        <g key={node.id}>
          {node.hub && (
            <circle
              cx={node.x}
              cy={node.y}
              r={14}
              fill="none"
              stroke="#1bcb80"
              strokeOpacity={0.25}
            />
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.hub ? 6 : 3}
            fill="#1bcb80"
            fillOpacity={node.hub ? 0.7 : 0.5}
          />
        </g>
      ))}
    </svg>
  );
}
