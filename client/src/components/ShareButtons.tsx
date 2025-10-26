import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Share2, MessageCircle, Facebook, Twitter, Mail, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

export function ShareButtons({ 
  url, 
  title, 
  description = '', 
  hashtags = ['ברסלב', 'ספרים', 'קרןרביישראל'],
  className = '' 
}: ShareButtonsProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedHashtags = hashtags.map(tag => `%23${tag}`).join('');

  const shareTexts = {
    whatsapp: `שלום! גיליתי משהו מדהים! 🎉\n\n${title}\n\n${description}\n\n${url}`,
    facebook: `${title}\n\n${description}`,
    twitter: `${title} ${encodedHashtags}`,
    email: `שלום!\n\nאני רוצה לשתף איתך:\n\n${title}\n\n${description}\n\n${url}`
  };

  const handleShare = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(shareTexts.whatsapp)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(shareTexts.facebook)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(shareTexts.twitter)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(shareTexts.email)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          setCopied(true);
          toast({
            title: "הקישור הועתק!",
            description: "הקישור הועתק ללוח",
          });
          setTimeout(() => setCopied(false), 2000);
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5 text-blue-600" />
          שתף עם חברים
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {/* WhatsApp */}
          <Button
            onClick={() => handleShare('whatsapp')}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>

          {/* Facebook */}
          <Button
            onClick={() => handleShare('facebook')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Facebook className="h-4 w-4 mr-2" />
            Facebook
          </Button>

          {/* Twitter */}
          <Button
            onClick={() => handleShare('twitter')}
            className="bg-sky-500 hover:bg-sky-600 text-white"
          >
            <Twitter className="h-4 w-4 mr-2" />
            Twitter
          </Button>

          {/* Email */}
          <Button
            onClick={() => handleShare('email')}
            className="bg-gray-600 hover:bg-gray-700 text-white"
          >
            <Mail className="h-4 w-4 mr-2" />
            Email
          </Button>
        </div>

        {/* Copy Link */}
        <div className="mt-4 pt-4 border-t">
          <Button
            onClick={() => handleShare('copy')}
            variant="outline"
            className="w-full"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-2 text-green-600" />
                הועתק!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                העתק קישור
              </>
            )}
          </Button>
        </div>

        {/* URL Display */}
        <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono text-gray-600 break-all">
          {url}
        </div>
      </CardContent>
    </Card>
  );
}
