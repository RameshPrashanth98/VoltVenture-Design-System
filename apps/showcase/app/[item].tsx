import { useState } from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { REGISTRY } from '../src/data/registry';
import * as tokens from 'voltventure-design-system';

type TabName = 'Preview' | 'Code';

export default function ItemScreen() {
  const { item } = useLocalSearchParams<{ item: string }>();
  const [activeTab, setActiveTab] = useState<TabName>('Preview');

  const entry = REGISTRY[item as string];

  if (!entry) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundText}>Coming soon: {item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Tab switcher */}
      <View style={styles.tabBar}>
        {(['Preview', 'Code'] as TabName[]).map((tab) => (
          <Pressable
            key={tab}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabLabel,
                activeTab === tab && styles.tabLabelActive,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Tab content */}
      {activeTab === 'Preview' ? (
        <ScrollView
          contentContainerStyle={styles.previewContent}
          style={styles.previewScroll}
        >
          <entry.Preview />
        </ScrollView>
      ) : (
        <CodeHighlighter
          hljsStyle={atomOneDark}
          language="tsx"
          textStyle={{
            fontFamily: 'JetBrainsMono_400Regular',
            fontSize: tokens.typeBodySm.fontSize,
          }}
          scrollViewProps={{
            contentContainerStyle: { padding: tokens.space400 },
          }}
        >
          {entry.sourceCode}
        </CodeHighlighter>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorSurfaceBase,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tokens.colorSurfaceBase,
  },
  notFoundText: {
    fontSize: tokens.typeBodyMd.fontSize,
    color: tokens.colorTextSecondary,
  },
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: tokens.borderWidthHairline,
    borderBottomColor: tokens.colorBorderSubtle,
    backgroundColor: tokens.colorSurfaceBase,
  },
  tab: {
    flex: 1,
    paddingVertical: tokens.space300,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: tokens.borderWidthFocus,
    borderBottomColor: tokens.colorActionPrimary,
  },
  tabLabel: {
    fontSize: tokens.typeBodyMd.fontSize,
    color: tokens.colorTextSecondary,
  },
  tabLabelActive: {
    color: tokens.colorTextPrimary,
    fontFamily: 'Inter_600SemiBold',
  },
  previewScroll: {
    flex: 1,
  },
  previewContent: {
    flexGrow: 1,
    padding: tokens.space400,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
