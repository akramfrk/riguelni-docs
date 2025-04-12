"use client"

import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import type { Components } from "react-markdown";
import Link from "next/link";
import { ChevronRight, MoreHorizontal, ChevronLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RealTimeCapabilitiesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMarkdownContent(`# Real-time Capabilities

The Riguelni Platform implements robust real-time capabilities to provide instant updates and seamless user interactions. This document outlines the key features and implementation details of our real-time systems.

## Core Features

### 1. WebSocket Integration
We use WebSocket connections to enable real-time communication between clients and servers. This allows for instant updates without polling, providing a more efficient and responsive user experience compared to traditional HTTP requests.

Key aspects of our WebSocket implementation:
- Bi-directional communication channel
- Automatic reconnection handling
- Connection state monitoring
- Efficient message delivery
- Secure authentication and authorization

Here's a basic example of setting up a WebSocket subscription:

\`\`\`typescript
const setupSubscription = async () => {
  const subscription = supabase
    .channel('messages')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'messages',
        filter: \`conversation_id=eq.\${currentConversation?.id}\`
      },
      (payload) => {
        if (payload.eventType === 'INSERT') {
          setMessages(prev => [...prev, payload.new as Message]);
        }
      }
    )
    .subscribe();
};
\`\`\`

### 2. Real-time Messaging
Our messaging system provides instant message delivery with several advanced features:

- **Optimistic Updates**: Messages appear instantly in the UI while being processed in the background
- **Read Receipts**: Real-time status updates for message delivery and reading
- **Typing Indicators**: Live feedback when users are composing messages
- **Message Synchronization**: Automatic conflict resolution for concurrent updates
- **Offline Support**: Message queueing and delivery when connection is restored

Here's how we handle optimistic updates in our messaging system:

\`\`\`typescript
const handleSendMessage = async (content: string) => {
  try {
    // Optimistic update
    const optimisticMessage: Message = {
      id: 'temp-' + Date.now(),
      content,
      sender_id: currentUser.id,
      conversation_id: currentConversation.id,
      created_at: new Date().toISOString(),
      is_read: false,
      is_deleted: false,
      is_edited: false
    };
    
    setMessages(prev => [...prev, optimisticMessage]);
    
    // Send to server
    const { data, error } = await supabase
      .from('messages')
      .insert([{
        content,
        conversation_id: currentConversation.id,
        sender_id: currentUser.id
      }])
      .select()
      .single();
      
    if (error) throw error;
    
    // Replace optimistic message with server response
    setMessages(prev => 
      prev.map(msg => 
        msg.id === optimisticMessage.id ? data : msg
      )
    );
  } catch (error) {
    console.error('Error sending message:', error);
    // Handle error and revert optimistic update
  }
};
\`\`\`

### 3. Live Updates
Various components of the platform update in real-time to provide immediate feedback:

- **Order Status Changes**: Instant updates for order processing and delivery
- **Notification System**: Real-time alerts for important events
- **User Presence**: Live status indicators for online/offline users
- **Activity Feeds**: Instant updates for user activities and system events
- **Collaborative Features**: Real-time updates for shared resources

## Implementation Details

### 1. Messaging System Architecture
Our messaging system combines several technologies to provide reliable real-time communication:

- **WebSocket Layer**: Handles real-time connections and message delivery
- **Database Subscriptions**: Monitors changes in the database for updates
- **State Management**: Manages local state and synchronizes with server
- **Caching System**: Improves performance and reduces server load
- **Error Handling**: Graceful degradation and recovery mechanisms

### 2. State Management
Real-time updates are managed through a sophisticated state management system:

- **Context Providers**: Global state management for real-time data
- **Optimistic Updates**: Immediate UI feedback while processing server requests
- **Conflict Resolution**: Handles concurrent updates and data conflicts
- **State Reconciliation**: Maintains consistency between client and server
- **Offline Support**: Queues updates for when connection is restored

Here's how we handle state management in our messaging provider:

\`\`\`typescript
const MessagingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  // Handle optimistic updates
  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };
  
  // Handle server updates
  const updateMessage = (message: Message) => {
    setMessages(prev => 
      prev.map(msg => msg.id === message.id ? message : msg)
    );
  };
  
  // Handle conflicts
  const resolveConflict = (local: Message, server: Message) => {
    if (server.updated_at > local.updated_at) {
      return server;
    }
    return local;
  };
};
\`\`\`

### 3. Performance Optimization
We implement several strategies to ensure optimal performance:

- **Connection Pooling**: Efficient management of WebSocket connections
- **Message Batching**: Groups related updates to reduce network traffic
- **Data Compression**: Reduces payload size for faster transmission
- **Caching Strategies**: Minimizes redundant data transfer
- **Resource Management**: Efficient handling of system resources

## Best Practices

1. **Connection Management**
   - Implement automatic reconnection with exponential backoff
   - Monitor connection health and state
   - Handle connection errors gracefully
   - Implement proper cleanup on disconnection

2. **Data Synchronization**
   - Use optimistic updates for better UX
   - Implement proper conflict resolution
   - Maintain data consistency across clients
   - Handle offline scenarios effectively

3. **Security Considerations**
   - Implement proper authentication
   - Use secure WebSocket connections (WSS)
   - Validate all incoming data
   - Implement rate limiting and abuse prevention

4. **Performance Optimization**
   - Minimize message payload size
   - Implement efficient data structures
   - Use appropriate caching strategies
   - Monitor and optimize resource usage

## Testing and Debugging

1. **Connection Testing**
   - Test under various network conditions
   - Verify reconnection behavior
   - Monitor error handling
   - Measure performance metrics

2. **Data Consistency**
   - Verify state synchronization
   - Test conflict resolution
   - Validate offline behavior
   - Check recovery procedures

3. **Performance Monitoring**
   - Track connection latency
   - Monitor message throughput
   - Measure resource usage
   - Analyze error rates

## Implementation Tips

1. **Connection Strategy**
   - Use WebSocket for real-time updates
   - Implement fallback mechanisms
   - Monitor connection health
   - Handle reconnection gracefully

2. **State Management**
   - Use optimistic updates
   - Implement conflict resolution
   - Maintain data consistency
   - Handle edge cases

3. **Performance Optimization**
   - Batch updates when possible
   - Use efficient data structures
   - Implement proper caching
   - Monitor resource usage

## Conclusion

Real-time capabilities are essential for modern web applications. The Riguelni Platform implements these features to provide a seamless and responsive user experience. By following these best practices and implementation strategies, you can ensure reliable and efficient real-time functionality in your applications.`);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const components: Partial<Components> = {
    h1: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h1 id={id} className="scroll-mt-24 mb-8">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h2 id={id} className="scroll-mt-24 mt-8 mb-4">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      return (
        <h3 id={id} className="scroll-mt-24 mt-6 mb-3">
          {children}
        </h3>
      );
    },
    code: ({ children, className }) => {
      const code = String(children).replace(/\n$/, '');
      return (
        <code className="inline-code bg-muted px-1.5 py-0.5 rounded-md text-sm">
          {code}
        </code>
      );
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="absolute top-[3.75rem] left-4 md:left-0 right-4 mb-8 overflow-x-auto whitespace-nowrap pb-2 px-4 md:px-0">
        <nav className="block md:pl-[280px] md:pr-[280px]">
          {isLoading ? (
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
          ) : (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/front-end/content/introduction/overview" className="text-sm">
                        Front-end Development
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <BreadcrumbLink href="/docs/front-end/content/key-features/app-router" className="text-sm">
                        Key Features
                      </BreadcrumbLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="text-sm md:text-base">
                  <BreadcrumbPage>Real-time Capabilities</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}
        </nav>
      </div>

      <div className="flex flex-col lg:flex-row">
        <main className="flex-1 max-w-full lg:max-w-3xl mx-auto pb-16 pt-16 px-4 md:px-8 lg:px-12">
          <div className="min-h-[200px] prose dark:prose-invert prose-primary max-w-none [&>*:first-child]:!mt-0 prose-headings:!mt-0">
            {isLoading ? (
              <div className="space-y-8">
                {/* Title section */}
                <div className="space-y-6">
                  <Skeleton className="h-12 w-[60%]" /> {/* Title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[90%]" />
                  </div>
                </div>

                {/* Overview section */}
                <div className="space-y-6">
                  <Skeleton className="h-8 w-[70%]" /> {/* Section title */}
                  <div className="space-y-4">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-[95%]" />
                    <Skeleton className="h-5 w-[85%]" />
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-[40%]" />
                    <Skeleton className="h-5 w-[45%]" />
                    <Skeleton className="h-5 w-[35%]" />
                    <Skeleton className="h-5 w-[42%]" />
                  </div>
                </div>

                {/* Navigation button skeleton */}
                <div className="flex items-center justify-between mt-20 pt-8 border-t border-border/40">
                  <div className="flex items-center gap-4 px-5 py-3">
                    <Skeleton className="h-7 w-7 rounded-full" />
                    <div className="flex flex-col">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-3">
                    <div className="flex flex-col items-end">
                      <Skeleton className="h-3 w-16 mb-2" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                    <Skeleton className="h-7 w-7 rounded-full" />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-20 pt-8 border-t border-border/40">
                  <Link
                    href="/docs/front-end/content/key-features/responsive"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <ChevronLeft className="h-4 w-4 text-primary group-hover:text-primary group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Previous
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:-translate-x-0.5 transition-all duration-300">
                        Responsive Design
                      </span>
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                  <Link
                    href="/docs/front-end/content/components-architecture/ui-components"
                    className="group flex items-center gap-4 px-5 py-3 rounded-lg hover:bg-accent/60 hover:shadow-sm transition-all duration-300 relative overflow-hidden no-underline"
                  >
                    <div className="flex flex-col items-end relative z-10">
                      <span className="text-xs font-medium text-muted-foreground/60 mb-1.5 group-hover:text-muted-foreground/80 transition-colors duration-200">
                        Next
                      </span>
                      <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300">
                        UI Components
                      </span>
                    </div>
                    <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <ChevronRight className="h-4 w-4 text-primary group-hover:text-primary group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/0 group-hover:to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 border-l border-border/40 pl-6">
          <nav className="sticky top-[4.5rem] h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="space-y-4 pb-8">
              <div className="font-medium">On this page</div>
              <nav className="space-y-2 text-sm">
                <Link
                  href="#real-time-capabilities"
                  onClick={(e) => handleScroll(e, "real-time-capabilities")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Real-time Capabilities
                </Link>
                <Link
                  href="#core-features"
                  onClick={(e) => handleScroll(e, "core-features")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Core Features
                </Link>
                <Link
                  href="#implementation-details"
                  onClick={(e) => handleScroll(e, "implementation-details")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Implementation Details
                </Link>
                <Link
                  href="#best-practices"
                  onClick={(e) => handleScroll(e, "best-practices")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Best Practices
                </Link>
                <Link
                  href="#testing-and-debugging"
                  onClick={(e) => handleScroll(e, "testing-and-debugging")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Testing and Debugging
                </Link>
                <Link
                  href="#conclusion"
                  onClick={(e) => handleScroll(e, "conclusion")}
                  className="block text-muted-foreground hover:text-primary"
                >
                  Conclusion
                </Link>
              </nav>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
} 